import React, { PropsWithChildren, ReactElement } from "react";
import Header from "../Header";

const MainLayout = (props: PropsWithChildren<any>): ReactElement => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default MainLayout;
