import React from 'react';

interface Props {
  children?: any,
  mt?: string,
  mb?: string,
  ml?: string,
  mr?: string,
  pt?: string,
  pb?: string,
  pl?: string,
  pr?: string,
  mx?: string,
  my?: string,
  px?: string,
  py?: string,
  m?: string,
  p?: string
}

const Spacing = (props:Props) => {
  const {
    children, mt, mb, ml, mr, mx, my, pt, pb, pl, pr, px, py, m, p,
  } = props;
  const childrenStyle = children.props.style || {};
  const newStyle:React.CSSProperties | undefined = {};
  if (mx !== null) {
    newStyle.marginLeft = mx;
    newStyle.marginRight = mx;
  }
  if (my !== null) {
    newStyle.marginTop = my;
    newStyle.marginBottom = my;
  }
  if (mt !== null) {
    newStyle.marginTop = mt;
  }
  if (mb !== null) {
    newStyle.marginBottom = mb;
  }
  if (ml !== null) {
    newStyle.marginLeft = ml;
  }
  if (mr !== null) {
    newStyle.marginRight = mr;
  }

  if (px !== null) {
    newStyle.paddingLeft = px;
    newStyle.paddingRight = px;
  }
  if (py !== null) {
    newStyle.paddingTop = py;
    newStyle.paddingBottom = py;
  }
  if (pt !== null) {
    newStyle.paddingTop = pt;
  }
  if (pb !== null) {
    newStyle.paddingBottom = pb;
  }
  if (pl !== null) {
    newStyle.paddingLeft = pl;
  }
  if (pr !== null) {
    newStyle.paddingRight = pr;
  }
  if (p !== null) {
    newStyle.paddingLeft = p;
    newStyle.paddingRight = p;
    newStyle.paddingTop = p;
    newStyle.paddingBottom = p;
  }
  if (m !== null) {
    newStyle.marginLeft = m;
    newStyle.marginRight = m;
    newStyle.marginTop = m;
    newStyle.marginBottom = m;
  }

  return React.cloneElement(children, {
    style: { ...childrenStyle, ...newStyle },
  });
};

Spacing.defaultProps = {
  mt: null,
  ml: null,
  mr: null,
  mb: null,
  mx: null,
  my: null,

  pt: null,
  pl: null,
  pr: null,
  pb: null,
  px: null,
  py: null,

  p: null,
  m: null,
};

export default Spacing;
