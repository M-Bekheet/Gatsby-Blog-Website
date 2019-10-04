import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

import contactStyles from './contact.module.scss';

const Contact = (props) => {
  
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false); 

  const showModal = () => {
    setVisible(true)
  };

  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(true);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const handleSubmit = e => {
    // e.preventDefault();
  }

  return(
    <>
      <Button
        href="#"
        onClick={showModal}
        className={contactStyles.button}
      >
        Contact Me
      </Button>
      <Modal
        title="Contact Me"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Item className={contactStyles.formInput} label="Name">
            <Input type="text" placeholder="your name"/>
          </Form.Item>
          <Form.Item className={contactStyles.formInput} label="Email">
            <Input type="text" placeholder="your email"/>
          </Form.Item>
          <Form.Item className={contactStyles.formInput} label="Message">
            <Input.TextArea rows={7} type="textarea" placeholder="your message"/>
          </Form.Item>
        </Form>
       
      </Modal>
    </>
  )
}

export default Contact;