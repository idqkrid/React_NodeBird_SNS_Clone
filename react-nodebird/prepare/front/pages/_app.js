// _app.js -> pages의 공통적인 부분을 담당
// layout는 일부 애들이 공통인 애들
import React from "react";
import "antd/dist/atd.css";
import PropTypes from "prop-types";
import Head from "next/head";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.PropTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;

// Component는 <AppLayout>Hello, Next!</AppLayout>; 의 데이터가 들어갑니다.
