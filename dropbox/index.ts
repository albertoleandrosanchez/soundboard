import { Dropbox } from "dropbox";

export const dbx = new Dropbox({
  accessToken: process.env.NEXT_PUBLIC_DROPBOX_ACCESS_TOKEN,
});
