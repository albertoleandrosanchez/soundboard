import { dbx } from "@/dropbox";

//folders

export const dbxListFolder = async (path: string) => {
  // const gdbx = fetch("http://localhost:3000/api/dbx/authorize", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  try {
    const list = await dbx.filesListFolder({
      path: path,
    });
    return list;
  } catch (error) {
    console.error(error);
  }
};
// files

export const dbxListFiles = async (path?: string) => {
  try {
    const list = await dbx.filesListFolder({
      path: path ?? " ",
      recursive: true,
    });
    const files = list;
    return files;
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

export const dbxTemporaryLink = async (path: string) => {
  try {
    const response = await dbx.filesGetTemporaryLink({
      path: path,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
