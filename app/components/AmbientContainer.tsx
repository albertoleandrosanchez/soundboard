import React, { useEffect } from "react";
import AmbientButton from "./AmbientButton";
import { files } from "dropbox";

type Props = {
  sounds:
    | (
        | files.FileMetadataReference
        | files.FolderMetadataReference
        | files.DeletedMetadataReference
      )[]
    | undefined;
};

const AmbientContainer = (props: Props) => {
  const [subcategories, setSubcategories] = React.useState<string[]>([]);

  const [files, setFiles] = React.useState<
    {
      name: string;
      subcategory: string | null;
      path: string;
    }[]
  >([]);

  const haveSubcategory = (
    file:
      | files.FileMetadataReference
      | files.FolderMetadataReference
      | files.DeletedMetadataReference
  ) => {
    const splitPath = file.path_display
      ?.split("/")
      .slice(2, file.path_display?.split("/").length - 1);
    if (!splitPath) return null;
    if (splitPath.length === 0) return null;
    return splitPath[0];
  };

  const subcategoryIsInArrayOfFiles = (subcategory: string | null) =>
    subcategory &&
    subcategories.some((subcategoryItem) => {
      return subcategoryItem === subcategory;
    });

  useEffect(() => {
    if (!props.sounds) return;
    props.sounds.forEach((file) => {
      const subcategory = haveSubcategory(file);
      if (subcategory && !subcategoryIsInArrayOfFiles(subcategory)) {
        setSubcategories([...subcategories, subcategory]);
      }
      if (props.sounds) {
        const filesMapped = props.sounds.map((file) => {
          return {
            name: file.name,
            subcategory: haveSubcategory(file),
            path: file.path_display ? file.path_display : "",
          };
        });
        setFiles(filesMapped);
      }
    });
  }, [props.sounds]);
  return (
    <div>
      <div className="p-2">
        <h2>General</h2>
        {files.map((file, i) => {
          if (!file.subcategory) {
            return <AmbientButton key={i} name={file.name} path={file.path} />;
          }
        })}
      </div>
      {subcategories.map((subcategory, i) => {
        return (
          <div key={i} className="p-2">
            <h2>{subcategory}</h2>
            <div className="flex flex-row">
              {files.map((file, j) => {
                if (file.subcategory === subcategory) {
                  return (
                    <AmbientButton key={j} name={file.name} path={file.path} />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AmbientContainer;
