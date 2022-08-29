import { ReactNode } from 'react';
import './boxContainer.scss';

interface BoxContainerProps {
  width: string;
  height: string;
  children: ReactNode;
  border?: boolean;
}

const BoxContainer = ({
  width,
  height,
  children,
  border,
}: BoxContainerProps) => {
  return (
    <div
      style={{ width, height }}
      className={
        border ? 'box-container box-container--border' : 'box-container'
      }
    >
      {children}
    </div>
  );
};

export default BoxContainer;
