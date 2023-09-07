import { createStore, Store, AnyAction } from 'redux';

export interface IState {
  error: string | null;
}

const initialState: IState = {
  error: null,
};

const reducer = (state: IState = initialState, action: AnyAction): IState => {
  if (action.type === 'SET_ERROR') {
    return { ...state, error: action.payload };
  }
  return state;
};

export const store: Store<IState, AnyAction> = createStore(reducer);


export const actions = {
  setError: (error: string) => ({ type: 'SET_ERROR', payload: error })
}

export const selectors = {
  getError: (state: any) => (state.error)
}