import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { Input, Upload, Progress, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import firebase, { db, storage } from "utils/firebase";
import { nanoid } from "nanoid";

function UploadModal({ isOpened, setIsOpen, username }) {
  const [file, setFile] = useState();
  const [caption, setPhotoCaption] = useState();
  const [progress, setProgress] = useState(0);

  const { Dragger } = Upload;

  const uploadProps = {
    onRemove: () => {
      setFile(null);
    },
    beforeUpload: (file) => {
      setFile(file);
      return false;
    },
    fileList: file ? [file] : [],
  };

  const handleUpload = () => {
    const imageName = `${file.name}_${nanoid()}`;
    const uploadTask = storage.ref(`images/${imageName}`).put(file);

    uploadTask.on(
      "stage_changed",
      // progress funtion
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progress);
      },
      //error function
      (error) => message.error(`${file.name} failed to upload`),
      //complete function
      () => {
        storage
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then(async (imageUrl) => {
            await db.collection("posts").add({
              caption: caption,
              username,
              imageUrl,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setIsOpen(false);
            setPhotoCaption("");
            setFile();
            setProgress(0);
          });
      }
    );
  };

  return (
    <Modal
      title="Upload post"
      visible={isOpened}
      onCancel={() => setIsOpen(false)}
      onOk={handleUpload}
    >
      <Input
        placeholder="Photo description"
        vlaue={caption}
        onChange={(e) => setPhotoCaption(e.target.value)}
      />
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
      <Progress percent={progress} />
    </Modal>
  );
}

export default UploadModal;
