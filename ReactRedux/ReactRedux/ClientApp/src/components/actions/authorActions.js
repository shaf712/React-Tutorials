﻿import * as types from './actionTypes';
import authorApi from '../../api/mockAuthorApi';

export function loadAuthors() {
    return function (dispatch) {
        return authorApi.getAllAuthors().then(authors => { dispatch(loadAuthorsSuccess(authors)) }).catch(error => { throw (error) });
    }
}


export function loadAuthorsSuccess(authors) {
    console.log('list of authors: ', authors);
    return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}
