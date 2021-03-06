import React, { useState } from "react";
import styled from "styled-components";
import { Avatar, Input, Button } from "antd";
import instagramLogo from "assets/instaLogo.png";

const PostContainer = styled.div`
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const UsernameText = styled.div`
  font-weight: 600;
  margin-left: 10px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-height: 600px;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    object-fit: contain;
  }
`;

const AddCommentContainer = styled.div`
  position: relative;
  display: flex;
`;

const CommentInput = styled(Input)`
  border: 0;
  border-radius: 0;
  border-top: 1px solid lightgray;
  padding: 10px 50px 10px 10px;

  :hover,
  :focus {
    border-color: lightgray;
    box-shadow: none;
  }
`;

const PostButton = styled(Button)`
  position: absolute;
  right: 0;
  padding: 0 10px 0 5px;
  height: 100%;

  :hover,
  :focus {
    background-color: transparent;
    color: #5094ce;
  }
`;

const Caption = styled.div`
  padding: 10px;

  strong {
    margin-right: 10px;
  }
`;

const CommentSection = styled.div`
  padding: 10px;

  strong {
    margin-right: 10px;
  }
`;

function Post({ username = "Andrei", avatarUrl, imageUrl, caption }) {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handlePostComment = () => {
    setComments((prevComments) => {
      return [...prevComments, commentText];
    });
  };

  return (
    <PostContainer>
      {/* Header */}
      <PostHeader>
        <Avatar alt={username} src={avatarUrl}>
          {username[0].toUpperCase()}
        </Avatar>
        <UsernameText>{username}</UsernameText>
      </PostHeader>
      {/* Image */}
      <ImageContainer>
        <img src={imageUrl} alt="post" />
      </ImageContainer>
      {/* Action Menu */}
      {/* Number Of Likes */}
      <Caption>
        <strong>{username}</strong>
        {caption}
      </Caption>
      {/* Add Comment */}
      <CommentSection>
        {comments.map((comment, index) => (
          <div key={comment + index}>
            <strong>{username}</strong>,{comment}
          </div>
        ))}
      </CommentSection>
      <AddCommentContainer>
        {/* Input */}
        <CommentInput
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        {/* Post Button */}
        <PostButton type="text" onClick={handlePostComment}>
          Post
        </PostButton>
      </AddCommentContainer>
    </PostContainer>
  );
}

export default Post;
