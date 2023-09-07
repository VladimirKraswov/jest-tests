import {FC, useState} from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

interface ILinkProps {
  page: string
  children: React.ReactElement | string
}

export const  Link: FC<ILinkProps> = ({ page, children }) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}