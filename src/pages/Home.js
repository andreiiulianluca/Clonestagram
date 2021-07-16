import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instagramLogo from "assets/instaLogo.png";
import Post from "components/Post";
import { auth, db } from "utils/firebase";
import DropDown from "components/DropDown";
import UploadModal from "components/UploadModal";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  position: sticky;
  z-index: 5;
  top: 0;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 10px;
  background-color: white;

  img {
    height: 40px;
    object-fit: contain;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

function Home() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const [isOpenedModal, setOpenedModal] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, [user]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );
  }, []);

  return (
    <AppContainer>
      <Header>
        <img src={instagramLogo} alt="instagram logo" />
        <DropDown
          username={user?.displayName}
          openUploadModal={() => setOpenedModal(true)}
        />
      </Header>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      <UploadModal
        isOpened={isOpenedModal}
        setIsOpen={setOpenedModal}
        username={user?.displayName}
      />
    </AppContainer>
  );
}

export default Home;
