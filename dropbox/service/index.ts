import { dbx } from "@/dropbox";

const BASE_SOUND_PATH = "/Sounds";

//folders

export const dbxListFolder = async (path: string) => {
  const gdbx = fetch("http://localhost:3000/api/dbx/authorize", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    const list = await dbx.filesListFolder({
      path: path,
    });
    return list;
  } catch (error) {
    console.error(error);
  }
};

export const dbxCreateFolder = async (path: string) => {
  try {
    const response = await dbx.filesCreateFolderV2({
      path: BASE_SOUND_PATH + path,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dbxDeleteFolder = async (path: string) => {
  try {
    const response = await dbx.filesDeleteV2({
      path: BASE_SOUND_PATH + path,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dbxMoveFolder = async (fromPath: string, toPath: string) => {
  try {
    const response = await dbx.filesMoveV2({
      from_path: BASE_SOUND_PATH + fromPath,
      to_path: BASE_SOUND_PATH + toPath,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dbxRenameFolder = async (path: string, newName: string) => {
  try {
    const response = await dbx.filesMoveV2({
      from_path: BASE_SOUND_PATH + path,
      to_path: BASE_SOUND_PATH + newName,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// files

/**
 * List files in a folder and the files in the subfolders
 * @param path
 * @returns [ { name: string, path: string, isFolder: boolean } ]
 */
// export const auth = async () => {
//   try {
//     // const response = await dbx.
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }
export const dbxListFiles = async (path?: string) => {
  const mpath = path ? path : "";
  try {
    const list = await dbx.filesListFolder({
      path: BASE_SOUND_PATH + mpath,
      // recursive: true,
    });
    const files = list.result.entries.map((entry) => {
      return {
        name: entry.name,
        path: entry.path_display,
        isFolder: entry[".tag"] === "folder",
      };
    });
    return files;
  } catch (error) {
    console.error(error);
  }
};
//file

export const dbxUploadFile = async (path: string, file: File) => {
  try {
    const response = await dbx.filesUpload({
      path: path,
      contents: file,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dbxDownloadFile = async (path: string) => {
  try {
    const response = await dbx.filesDownload({
      path: path,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dbxDeleteFile = async (path: string) => {
  try {
    const response = await dbx.filesDeleteV2({
      path: BASE_SOUND_PATH + path,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dbxMoveFile = async (fromPath: string, toPath: string) => {
  try {
    const response = await dbx.filesMoveV2({
      from_path: BASE_SOUND_PATH + fromPath,
      to_path: BASE_SOUND_PATH + toPath,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dbxRenameFile = async (path: string, newName: string) => {
  try {
    const response = await dbx.filesMoveV2({
      from_path: BASE_SOUND_PATH + path,
      to_path: BASE_SOUND_PATH + newName,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dbxTemporaryLink = async (
  path: string,
  type: "sound" | "ambient" = "sound"
) => {
  try {
    if (type === "ambient") {
      const response = await dbx.filesGetTemporaryLink({
        path: "/Ambient" + "/" + path,
      });
      console.log(response);
      return response;
    }
    const response = await dbx.filesGetTemporaryLink({
      path: BASE_SOUND_PATH + "/" + path,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
