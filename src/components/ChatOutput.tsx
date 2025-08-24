import React from "react";

type Props = {
  prompt: string;
  response: string;
  onCopy: () => void;
  onDownload: () => void;
};

const ChatOutput: React.FC<Props> = ({ prompt, response, onCopy, onDownload }) => (
  <div className="mb-4 border rounded p-4 bg-gray-50">
    <div className="mb-2">
      <span className="font-semibold">Prompt:</span> {prompt}
    </div>
    <div className="mb-2">
      <span className="font-semibold">Response:</span> {response}
    </div>
    <button className="mr-2 bg-blue-500 text-white px-2 py-1 rounded" onClick={onCopy}>Copy</button>
    <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={onDownload}>Download JSON</button>
  </div>
);

export default ChatOutput;