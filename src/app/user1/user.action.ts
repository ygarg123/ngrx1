import { createAction, props } from '@ngrx/store';

const API = 'Fretron';

export const API_ERROR_ACTION = 'API Error';
 export const API_SUCCESS_ACTION = 'API Success';

export const Api = createAction(API, props<{ id: string }>());

export const ApiDataError = createAction(API_ERROR_ACTION, props<{ error: any }>());
export const ApiDataSuccess = createAction(API_SUCCESS_ACTION, props<{ data: any }>());

