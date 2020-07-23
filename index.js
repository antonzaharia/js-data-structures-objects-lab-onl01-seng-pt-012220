let driver = {};
function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = {...obj};
  newObj[key] = value;
  return Object.assign({}, newObj);
};
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  
};