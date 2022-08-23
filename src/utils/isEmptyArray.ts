const isEmptyArray = (arr: any) => {
  if (arr !== undefined && arr !== null && arr.length > 0) {
    return false;
  }
  return true;
};

export default isEmptyArray;
