let driver = {};
function updateDriverWithKeyAndValue(obj, key, value) {
  let newObj = {...obj};
  newObj.key = value;
  return Object.assign({}, newObj);
};
