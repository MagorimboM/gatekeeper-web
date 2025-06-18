import React from "react";

function Chats() {

    // todo : from global state, grab the chat history, both incoming texts and outgoing texts
    // todo : need an array for this....
  return (
    <div className="h-full w-full overflow-y-auto flex gap-10 p-4 flex-col">
      <div className="self-end bg-gray-200 text-black p-2 rounded-lg max-w-[70%] break-words">
     outgoing texts blah blah blah blah....
      </div>
      <div className="self-start bg-violet-500 text-white p-2 rounded-lg max-w-[70%] break-words">
        incoming texts blah blah blah blah..
      </div>
    </div>
  );
}

export default Chats;
