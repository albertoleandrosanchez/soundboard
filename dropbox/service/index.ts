import { dbx } from "@/dropbox";

const BASE_SOUND_PATH = "/Sounds";

//folders

export const dbxListFolder = async (path: string) => {
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

//files

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
