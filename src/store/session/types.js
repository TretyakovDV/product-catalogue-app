import createType from '../../utils/createType';

const namespace = 'session';

export const SIGN_IN = createType(namespace, 'SIGN_IN');
export const SIGN_UP = createType(namespace, 'SIGN_UP');
export const SIGN_OUT = `${namespace}/SIGN_OUT`;
