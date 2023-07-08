import { UniList, UniListKeys } from "../apis/types";

type AttrKeys = 'UNITID' | 'INSTNM' | 'CITY' | 'STABBR' | 'INSTURL';

const HEADER_MAPPER: Record<AttrKeys, UniListKeys> = {
  UNITID: 'id',
  INSTNM: 'name',
  CITY: 'city',
  STABBR: 'state',
  INSTURL: 'url',
};

/**
 * Transforms the stringified CSV into an array of objects
 * @param {String} data The CSV data to transform
 * @returns {Object}
 */
function formatCSV(data: string): UniList[] {
  const dataArray = data.split('\n');

  if (!dataArray.length) return [];

  const headers = dataArray.shift()!.split(',') as AttrKeys[];

  return dataArray.map((uni: string): UniList => {
    const attributes = uni.split(',');

    return attributes.reduce((obj, attr, index) => {
      obj[HEADER_MAPPER[headers[index]]] = attr;
      return obj;
    }, {} as Record<UniListKeys, string>);
  });
}

export default formatCSV;
