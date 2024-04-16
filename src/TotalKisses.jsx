import { useContext } from 'react';
import { KissesContext } from './Contexts';

export const TotalKisses = () => {
  const kisses = useContext(KissesContext);

  return <p>{kisses.kiss}</p>;
};
