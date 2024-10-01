export const convertToPlainObject = (data: unknown) => {
  return JSON.parse(JSON.stringify(data));
};
