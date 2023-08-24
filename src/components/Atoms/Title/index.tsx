import React from "react";
type Props = {
  lv?: "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};
const Title: React.FC<Props> = ({ lv = "h2", children }) => {
  const Tag = lv;
  return <Tag>{children}</Tag>;
};

export default Title;
