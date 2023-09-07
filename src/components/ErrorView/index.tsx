import React, {FC} from 'react';
import { useSelector } from 'react-redux';

import {IState, selectors} from '../../store';

interface IErrorViewProps {
  style: any
}

export const  ErrorView: FC<IErrorViewProps> = ({ style }) => {
  const error = useSelector<IState, string>(selectors.getError);

  if (!error) {
    return null;
  }

  return (
    <p style={style}>{error}</p>
  );
}