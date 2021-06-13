/* eslint-disable max-len */
import React, {ReactChildren, ReactChild} from 'react';

enum TextElements {
  xl = 'h1',
  lg = 'h2',
  rg = 'h3',
  sm = 'h4',
  xs = 'h5',
  xxs = 'h6',
}

const Typology: React.FC<{size: string, children: ReactChild | ReactChildren}> = ({size, children, ...props}) => {
  return React.createElement(
    TextElements[size as keyof typeof TextElements] || TextElements.rg,
    props,
    children,
  );
};

Typology.defaultProps = {
  size: 'rg',
};

export default Typology;
