import { Upload, message, Button, Modal } from 'antd';
import { FileImageOutlined, SyncOutlined } from '@ant-design/icons';
import { useState, Fragment } from 'react';
import postMeasure from '../../util/axios';
import ResultsPage from '../ResultsPage';

const { Dragger } = Upload;

export default function MeasurePage(props) {
  const [uploadIcon, setUploadIcon] = useState(<FileImageOutlined />)
  const [templeWidth, setTempleWidth] = useState(null);
  const [noseBridgeWidth, setNoseBridgeWidth] = useState(null);

  const uploadProps = {
    name: 'file',
    multiple: false,
    accept: 'image/png, image/jpeg, image/jpg',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        setUploadIcon(<SyncOutlined spin />);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        setUploadIcon(<FileImageOutlined />);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        setUploadIcon(<FileImageOutlined />);
      }
    },
    customRequest: async (requestProps) => {
      const formData = new FormData();
      const imageFile = requestProps.file;
      formData.append("file", imageFile);
      await postMeasure(formData, setNoseBridgeWidth, setTempleWidth);
      requestProps.onSuccess();
    },
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    (templeWidth && noseBridgeWidth) ? (
      <ResultsPage
        templeWidth={templeWidth}
        noseBridgeWidth={noseBridgeWidth}
      />
    ) : (
      <Fragment>
        <div style={{width: '100%', maxWidth: '70%', margin: 'auto', fontSize: '30px', marginBottom: '50px'}}>
          <h1>
            Get your measurements
          </h1>
          <Button type="primary" onClick={showModal}>
            Image Instructions
          </Button>
          <Modal title="How to get accurate results" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>In order to get the best results use a standard, white A4 piece of printer paper.</p>
            <p>When taking the picture try to have good front lighting, make sure the paper and your head are fully in the shot.</p>
            <p>Try to cover the least amount of the piece of paper with your hand, and have your background sufficiently contrast the white of the paper.</p>
            <p>Finally, try to hold the piece of paper perfectly vertical, and the same distance from the camera as your face.</p>
          </Modal>
        </div>

        <div style={{width: '100%', maxWidth: '50%', margin: 'auto'}}>
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              {uploadIcon}
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Upload a single file of your face and an A4 sized piece of paper.
            </p>
          </Dragger>
        </div>
      </Fragment>
    )
  );
}
