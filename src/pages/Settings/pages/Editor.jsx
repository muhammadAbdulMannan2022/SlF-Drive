import RichTextEditor from "../../../components/Editor/Editor";

const EditorDemo = ({ markdown, setMarkdown }) => {
  return (
    <div className="h-[90%] mx-auto p-6 space-y-6">
      <RichTextEditor onChange={setMarkdown} />
    </div>
  );
};

export default EditorDemo;
