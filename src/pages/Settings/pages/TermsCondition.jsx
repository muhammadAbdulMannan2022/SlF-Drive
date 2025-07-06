// In page.jsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import EditorDemo from "./Editor";
import { FaArrowLeft } from "react-icons/fa";

function TermsCondition() {
  const [markdown, setMarkdown] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="h-full px-6">
      <div className="h-[90%] overflow-y-auto">
        <div className="flex items-center justify-start gap-4 mt-8 text-2xl text-gray-600">
          <h1>
            <FaArrowLeft />
          </h1>
          {isEditing ? (
            <h1>Edit Terms & Conditions</h1>
          ) : (
            <h1>Terms & Conditions</h1>
          )}
        </div>
        {isEditing ? (
          <EditorDemo markdown={markdown} setMarkdown={setMarkdown} />
        ) : (
          <div className="border-gray-300 rounded-lg p-4 mt-5">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {markdown}
            </ReactMarkdown>
          </div>
        )}
      </div>
      <div className="justify-end flex me-8">
        {isEditing ? (
          <button
            onClick={() => {
              setIsEditing(false);
              console.log(markdown);
            }}
            className="bg-gradient-to-r from-[#071352] to-[#0023CF] text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 transition"
          >
            Update
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gradient-to-r from-[#071352] to-[#0023CF] text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default TermsCondition;
