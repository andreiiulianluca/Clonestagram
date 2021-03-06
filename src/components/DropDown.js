import React from "react";
import { Dropdown, Menu } from "antd";
import { auth } from "utils/firebase";
import styled from "styled-components";

const Username = styled.span`
  cursor: pointer;
`;

function DropDown({ username, openUploadModal }) {
  const menu = (
    <Menu>
      <Menu.Item key="upload" onClick={openUploadModal}>
        Upload
      </Menu.Item>
      <Menu.Item key="logout" onClick={() => auth.signOut()}>
        Sign Out
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Username>{username}</Username>
    </Dropdown>
  );
}

export default DropDown;
