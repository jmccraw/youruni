const HEADER_MAPPER = {
  UNITID: 'id',
  INSTNM: 'name',
  CITY: 'city',
  STABBR: 'state',
  INSTURL: 'url',
};

const formatCSV = (data) => {
  const dataArray = data.split('\n');
  const headers = dataArray.shift().split(',');

  return dataArray.map(uni => {
    const attributes = uni.split(',');
    return attributes.reduce((obj, attr, index) => {
      obj[HEADER_MAPPER[headers[index]]] = attr;
      return obj;
    }, {});
  });
};

export default formatCSV;
