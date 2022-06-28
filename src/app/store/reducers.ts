import { createReducer, on, ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { UserState ,initialUserState} from '../user1/user.reducer';
import * as userReducer from '../user1/user.reducer';

import { Data, ApiError, ApiSuccess, DATA_SUCCESS_ACTION } from './actions';
const initialFeatureState: FeatureState = {
  error: null,
  selectedMockData: [],
};
export interface FeatureState{
  error: any;
  selectedMockData: any[] | null;
}
export interface RootState {
  featureState:FeatureState,
  userState:UserState
  
}
const initialState: RootState = {
  featureState:initialFeatureState,
  userState:initialUserState
};


export const rootReducer = createReducer(
  initialFeatureState,
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
export function reducer(state = initialFeatureState, action: any): FeatureState {
  switch (action.type) {
    case DATA_SUCCESS_ACTION: {
      return  {...state,selectedMockData:action.data}
    }
    default:
      return state;
  }
}
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    const newState=reducer(state, action)
    console.log('state', state);
    console.log('action', action);
    console.log('new',newState);
    
    return newState;
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

export const reducers: ActionReducerMap<RootState> = {
  featureState: reducer,
  userState:userReducer.reducer
   };
