import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instagramLogo from "assets/instaLogo.png";
import Post from "components/Post";
import { auth, db } from "utils/firebase";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 10px;

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, [user]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          username: doc.data().username,
          imageUrl: doc.data().imageUrl,
        }))
      )
    );
  }, []);

  return (
    <AppContainer>
      {/* header */}
      <Header>
        {user?.displayName}
        <img src={instagramLogo} alt="instagram logo" />
      </Header>
      {/* list of posts */}
      {posts.map((post) => (
        <Post key={post.id} username={post.username} imageUrl={post.imageUrl} />
      ))}
      <Post />
    </AppContainer>
  );
}

export default Home;
