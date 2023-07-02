import { useEffect, useReducer } from 'react';
import formatCSV from '../utils/formatCSV';

interface FetchUniList {
  uniUrl: string;
}

export interface UniList {
  city: string;
  id: string;
  name: string;
  state: string;
  url: string;
}

interface UniListState {
  hasError: boolean;
  isLoading: boolean;
  uniList: UniList[];
}

interface UniListAction {
  type: string;
  payload?: UniList[];
}

export const FETCH_UNI_ACTION_TYPES = {
  ERROR: 'error',
  LOADING: 'loading',
  RESET: 'reset',
  SET: 'set',
};

const useFetchUniList = ({
  uniUrl,
}: FetchUniList) => {
  const initialState: UniListState = {
    hasError: false,
    isLoading: false,
    uniList: [],
  };

  const reducer = (state: UniListState, action: UniListAction) => {
    switch (action.type) {
      case FETCH_UNI_ACTION_TYPES.ERROR: {
        return {
          ...state,
          hasError: true,
          isLoading: false,
        };
      }
      case FETCH_UNI_ACTION_TYPES.LOADING: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case FETCH_UNI_ACTION_TYPES.RESET: {
        return {
          ...initialState,
        };
      }
      case FETCH_UNI_ACTION_TYPES.SET: {
        return {
          ...state,
          hasError: false,
          isLoading: false,
          uniList: action?.payload ?? [],
        };
      }
      default:
        return state;
    }
  };

  const [{ hasError, isLoading, uniList }, dispatch]: [UniListState, React.Dispatch<UniListAction>] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: FETCH_UNI_ACTION_TYPES.LOADING });
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(uniUrl, { signal })
      .then(resp => resp.text())
      .then(data => {
        const formattedList = formatCSV(data);
        dispatch({ type: FETCH_UNI_ACTION_TYPES.SET, payload: formattedList });
      })
      .catch(err => {
        dispatch({ type: FETCH_UNI_ACTION_TYPES.ERROR });
        console.error(`Something unexpected happened fetching UniList CSV: ${err}`);
      });

    return () => {
      controller.abort();
      dispatch({ type: FETCH_UNI_ACTION_TYPES.RESET });
    };
  }, [uniUrl]);

  return {
    hasError,
    isLoading,
    uniList,
  };
};

export default useFetchUniList;
