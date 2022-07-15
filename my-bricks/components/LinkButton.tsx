/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import classname from 'utils/classname';

interface Props extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  borderRadius?: string,
  bg?: string
  fontSize?: string,
  fontColor?: string,
  paddingX?: number,
  paddingY?: number,
  className? :string,
  href?: string,
  children?: any
}

const LinkButton: React.FC<Props> = ({
  borderRadius, bg, fontSize, fontColor, paddingX, paddingY, className, href,
  ...resProps
}) => (
  <a
    href={href}
    className={classname('font-bold inline-block', borderRadius, bg, fontSize, fontColor, className)}
    style={{ padding: `${paddingY}px ${paddingX}px` }}
    {...resProps}
  >
    {resProps.children}
  </a>
);

LinkButton.defaultProps = {
  borderRadius: 'rounded-md',
  bg: 'bg-blue-500',
  fontSize: 'text-base',
  fontColor: 'text-white',
  paddingX: 20,
  paddingY: 10,
  className: '',
  children: 'Button',
  href: '',
};

export default LinkButton;
