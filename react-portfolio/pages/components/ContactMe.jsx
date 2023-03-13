import React from 'react'
import { FloatButton } from "antd";
import { MessageFilled, MessageTwoTone } from "@ant-design/icons";

const ContactMe = () => {
  return (
    <>
      <FloatButton
        tooltip="Contact Me"
        onClick={() => alert("'Contact Me' Form in Development...")}
        icon={<MessageFilled />}
        className='bg-gradient-to-r from-cyan-500 to-white bg-white'
      />
    </>
  )
}

export default ContactMe;



