import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureState, RootState } from './reducers';
const selectFeatureState = createFeatureSelector<
RootState,
FeatureState 
   >("featureState");     

export const getStateSelectedData = createSelector(
  selectFeatureState,
    (state:FeatureState) => state.selectedMockData
)

 

// const getStateError = createSelector(
//   getError,
//   (state: any) => state,
// );
