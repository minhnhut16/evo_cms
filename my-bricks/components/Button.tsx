/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import classname from 'utils/classname';

interface Props {
  borderRadius?: string,
  bg?: string
  fontSize?: string,
  fontColor?: string,
  paddingX?: number,
  paddingY?: number,
  className? :string,
  children?: any
}

const Button: React.FC<Props> = ({
  borderRadius, bg, fontSize, fontColor, paddingX, paddingY, className,
  ...resProps
}) => (
  <button
    className={classname('font-bold', borderRadius, bg, fontSize, fontColor, className)}
    style={{ padding: `${paddingY}px ${paddingX}px` }}
    {...resProps}
  >
    {resProps.children}
  </button>
);

Button.defaultProps = {
  borderRadius: 'rounded-md',
  bg: 'bg-blue-500',
  fontSize: 'text-base',
  fontColor: 'text-white',
  paddingX: 20,
  paddingY: 10,
  className: '',
  children: 'Button',
};

export default Button;
