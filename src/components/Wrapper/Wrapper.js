import React from "react";
import "./Wrapper.scss";

export default function Wrapper(props) {
  return <div className="Wrapper">{props.children}</div>;
}
