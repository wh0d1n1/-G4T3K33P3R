import * as React from "react";

function Overlay(props) {
  return (
    <svg height="1em" viewBox="0 0 1440 1024" width="1em" {...props}>
      <radialGradient
        id="prefix__a"
        cx="14.341%"
        cy="-11.487%"
        gradientTransform="matrix(.28938 .91346 -.64957 .40694 .027 -.2)"
        r="109.474%"
      >
        <stop offset={0} stopColor="#161c24" stopOpacity={0.48} />
        <stop offset={0.499} stopColor="#161c24" stopOpacity={0.8} />
        <stop offset={1} stopColor="#161c24" />
      </radialGradient>
      <path
        d="M0 0h1440v1024H0z"
        fill="url(#prefix__a)"
        fillRule="evenodd"
        transform="matrix(-1 0 0 1 1440 0)"
      />
    </svg>
  );
}

const MemoOverlay = React.memo(Overlay);
export default MemoOverlay;
