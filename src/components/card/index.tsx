import { memo } from 'react';

import { UniList } from '../../apis/useFetchUniList';
import './index.css';

const Card = ({
  city,
  name,
  state,
  url
}: UniList): JSX.Element => (
    <article className="card">
      <span className="card__location">{city} • {state}</span>
      <h2 className="card__name">{name}</h2>
      <a className="card__link" href={url.includes('https://') ? url : `https://${url}`} target="_blank" rel="noreferrer">{url}</a>
    </article>
  );

export default memo(Card);
