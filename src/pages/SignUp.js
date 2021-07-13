import React, { useState } from "react";
import styled from "styled-components";

import instaLogo from "assets/instaLogo.png";
import { Input, Button } from "antd";
import { auth } from "utils/firebase";

const CenteredWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 200px;
`;

const SignUpContainer = styled.div`
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  > * {
    margin-bottom: 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 40px;
    object-fit: contain;
  }
`;

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password).then((authUser) =>
      authUser.user.updateProfile({
        displayName: username,
      })
    );
  };
  return (
    <CenteredWrap>
      <SignUpContainer>
        {/*instagram logo*/}
        <LogoContainer>
          <img src={instaLogo} alt="instagram logo" />
        </LogoContainer>
        {/*username*/}
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/*e-mail*/}
        <Input
          placeholder="E-mail"
          type="email"
          value="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/*password*/}
        <Input
          placeholder="Password"
          type="password"
          value="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/*sign-up button*/}
        <Button type="primary">Sign-Up</Button>
      </SignUpContainer>
    </CenteredWrap>
  );
}

export default SignUp;
