import createType from '../../utils/createType';

const namespace = 'posts';

export const GET_POSTS = createType(namespace, 'GET_POSTS');
export const SET_POSTS = `${namespace}/SET_POSTS`;
export const EDIT_POST = `${namespace}/EDIT_POST`;
export const DELETE_POST = `${namespace}/DELETE_POST`;
