import React from "react";
import Title from "@/app/_components/Atoms/Title";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header>
      <Title>{title}</Title>
    </header>
  );
};

export default Header;
