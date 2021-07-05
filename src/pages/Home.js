import React from "react";
import styled from "styled-components";
import instagramLogo from "assets/instaLogo.png";
import Post from "components/Post";
const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 10px;

  img {
    height: 40px;
    object-fit: contain;
  }
`;

function Home() {
  return (
    <AppContainer>
      {/* header */}
      <Header>
        <img src={instagramLogo} alt="instagram logo" />
      </Header>
      {/* list of posts */}
      <Post />
    </AppContainer>
  );
}

export default Home;
