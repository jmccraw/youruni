export interface FetchUniList {
  uniUrl: string;
}

export interface UniList {
  city: string;
  id: string;
  name: string;
  state: string;
  url: string;
}

export type UniListKeys = 'city' | 'id' | 'name' | 'state' | 'url';

export interface UniListState {
  hasError: boolean;
  isLoading: boolean;
  uniList: UniList[];
}

export interface UniListAction {
  type: string;
  payload?: UniList[];
}
