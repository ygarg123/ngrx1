import { createAction, props } from '@ngrx/store';

const DATA = '[Random] Get My Data';

export const DATA_ERROR_ACTION = '[Random]  Error';
 export const DATA_SUCCESS_ACTION = '[Random] Success';

export const Data = createAction(DATA, props<{ id: string }>());

export const ApiError = createAction(DATA_ERROR_ACTION, props<{ error: any }>());
export const ApiSuccess = createAction(DATA_SUCCESS_ACTION, props<{ data: any }>());

// export type ActionTypes=ApiError | ApiSuccess