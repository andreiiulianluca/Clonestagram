import React from "react";
import styled from "styled-components";
import instagramLogo from "assets/instaLogo.png";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

function Home() {
  return (
    <AppContainer>
      {/* header */}
      <Header>
        <img src={instagramLogo} alt="instagram logo" width={100}/>
      </Header>
      {/* list of posts */}
    </AppContainer>
  );
}

export default Home;
