import { createReducer, on, ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';

import { API_SUCCESS_ACTION } from './user.action';
 
export interface UserState {
  error: any;
  selectedMockData: any[] | null;
  
}
export const initialUserState: UserState = {
  error: null,
  selectedMockData: [],
};


export const userReducer = createReducer(
  initialUserState,
  // on(ApiError, state=> ({
  //   ...state,
  //   // error: .error,
  //   selectedMockData: null,
  // })),
  // // on(ApiSuccess, (state, action) =>  ({ selectedMockData: action.data, error: null })),
  // on(ApiSuccess, (state, action) => ({
  //   ...state,
  //    selectedMockData: action.data 
  // }))
);
export function reducer(state = initialUserState, action: any): UserState {
  switch (action.type) {
    case API_SUCCESS_ACTION: {
      return  {...state,selectedMockData:action.data}
    }
    default:
      return state;
  }
}
 
 