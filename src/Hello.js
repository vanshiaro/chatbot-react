import React from "react";
import ChatBot from "react-simple-chatbot";
class Hello extends React.Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Hey, John ! Good morning",
            trigger: "2"
          },
          {
            id: "2",
            user: true,
            trigger: "3"
          },
          {
            id: "3",
            message:
              "John, did you know you can now invest in any property real estate as an alternative investment with secured & transparent mechanics using crypto currency?",
            trigger: "4"
          },

          {
            id: "4",
            user: true,
            trigger: "5"
          },
          {
            id: "5",
            message:
              "Users can list their property and tokenize it on a platform and investors can buy fractionalised token of the property instead of investing on whole property and then can buy / sell it on market place as and when the prize of the property sees a notable change.",
            trigger: "6"
          },
          {
            id: "6",
            user: true,
            trigger: "7"
          },
          {
            id: "7",
            message:
              "It’s very simple, all you need to do is create an account on meta mask and buy some cryptocurrency like Ethers and use them to buy some fractionalise token of listed properties. ",
            trigger: "8"
          },
          {
            id: "8",
            user: true,
            trigger: "9"
          },
          {
            id: "9",
            message:
              "Exploring various properties is fun too. It’s time to invest & earn!  Would you like to join the most trending platform for real estate investing ?",
            trigger: "10"
          },
          {
            id: "10",
            user: true,
            trigger: "11"
          },
          {
            id: "11",
            message:
              "Great ! I'll help you in connecting them. You will receive a message on our mobile app and sms shortly.",
            end: true
          }
        ]}
      />
    );
  }
}
export default Hello;
