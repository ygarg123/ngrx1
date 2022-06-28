import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootState } from '../store/reducers';
import { UserState } from './user.reducer';
const selectFeatureState = createFeatureSelector<
RootState,
UserState 
   >("userState");     

export const getSelectedData = createSelector(
  selectFeatureState,
    (state:UserState) => state.selectedMockData
)

 

// const getStateError = createSelector(
//   getError,
//   (state: any) => state,
// );
