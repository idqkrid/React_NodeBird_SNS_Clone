import React from "react";
import { Form, Input } from "antd";
import Styled from "styled-components";

const NicknameEditForm = () => {
  const InputSearch = Styled(Input.Search)`
    marginBottom: 20px;
    border: 1px solid #d9d9d9;
    padding;
  `;

  return (
    <Form>
      <InputSearch addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
};

export default NicknameEditForm;
