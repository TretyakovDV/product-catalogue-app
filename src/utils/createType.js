export default (namespace, type) => ({
  REQUEST: `${namespace}/${type}/REQUEST`,
  SUCCESS: `${namespace}/${type}/SUCCESS`,
  FAILURE: `${namespace}/${type}/FAILURE`,
});
