import { memo } from 'react';

import { UniList } from '../../apis/types';
import './index.css';

const HTTPS = 'https://';
const TRAILING_SLASH = '/';

const Card = ({
  city,
  name,
  state,
  url
}: UniList): JSX.Element => {
  const formattedUrl = url.trim().toLowerCase();
  const anchorLink = formattedUrl.includes(HTTPS) ? formattedUrl : `${HTTPS}${formattedUrl}`;

  const getFormattedUrl = () => {
    const expression = new RegExp(`${HTTPS}|www.`, 'ig');
    let tempUrl = formattedUrl.charAt(formattedUrl.length - 1) === TRAILING_SLASH
      ? formattedUrl.slice(0, -1)
      : formattedUrl;
    return tempUrl.replace(expression, '');
  };


  return (
    <article className="card">
      <span className="card__location">{city} • {state}</span>
      <h2 className="card__name">{name}</h2>
      <a className="card__link" href={anchorLink} target="_blank" rel="noreferrer">{getFormattedUrl()}</a>
    </article>
  );
};

export default memo(Card);
