let driver = {};
function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = {...obj};
  newObj[key] = value;
  return Object.assign({}, newObj);
};
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return Object.assign(obj);
};
function deleteFromDriverByKey(obj, key) {
  const newObj = {...obj};
  delete obj.key;
  return Object.assign({}, obj);
};
