import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../Hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import useListenMessages from "../../Hooks/useListenMessages";
// import useConversation from "../../Zustand/useConversation";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  // const {selectedConversation,setSelectedConversation}=useConversation()
  useListenMessages()
  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    },1000)
   
  }, [messages]);
  console.log("messages:", messages);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* <MessageSkeleton/> */}
      {loading && <MessageSkeleton />}
      {!loading && messages.length == 0 && (
        <p className="text-slate-400 text-center">
          Send a message to start conversation
        </p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => {
          // const lastIndex = index == messages.length - 1;
          return (
            <div key={message._id} ref={ lastMessageRef}>
              <Message
              message={message}
            //  messageShake={message.shouldShake}
                messages={message.message}
                messageTime={message.createdAt}
                messageSender={message.senderId}
                messagePic={message.profilePic}
              />
            </div>
          );
        })}
    </div>
  );
};
// // messages.map((message)=>{
// //   return <Message message={message.message} messageTime={message.createdAt}
//  messageSender={message.senderId}   messagePic={message.profilePic} />
//  }
export default Messages;

// createdAt
// :
// "2024-09-16T12:01:05.698Z"
// message
// :
// "hii"
// receiverId
// :
// "66e54cce95dd92127fd8791d"
// senderId
// :
// "66e81c83a8bcb6e2221404a4"
// updatedAt
// :
// "2024-09-16T12:01:05.698Z"
// __v
// :
// 0
// _id
// :
// "66e81e01a8bcb6e2221404ee
// import React, { useEffect, useRef } from 'react';
// import Message from './Message';
// import useGetMessages from '../../Hooks/useGetMessages';
// import MessageSkeleton from '../../skeletons/MessageSkeleton';

// const Messages = () => {
//   const { messages, loading } = useGetMessages();
//   const lastMessageRef = useRef();

//   // Scroll to the last message when the messages array changes
//   useEffect(() => {
//     lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <div className="px-4 flex-1 overflow-auto">
//       {loading && <MessageSkeleton />}
//       {!loading && messages.length === 0 && (
//         <p className="text-slate-400 text-center">Send a message to start conversation</p>
//       )}
//       {!loading && messages.length > 0 && messages.map((message, index) => {
//         const isLastMessage = index === messages.length - 1;
//         return (
//           <div key={message._id} ref={isLastMessage ? lastMessageRef : null}>
//             <Message
//               message={message.message}
//               messageTime={message.createdAt}
//               messageSender={message.senderId}
//               messagePic={message.profilePic}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Messages;
