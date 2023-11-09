import React,{useState} from 'react'
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../Componets/PostToolbar"
import "react-quill/dist/quill.snow.css";
const CreatePost = () => {

  const [state, setState] = useState({ value: null });
  const handleChange = value => {
    setState({ value });
    console.log(state)
  };
  return (
    <>

    <div className="container mx-auto p-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create a Post</h2>

        <form>
          <div className="mb-4 relative">
            <label htmlFor="postContent" className="block  text-gray-600 font-bold text-xl m-2">Post Content</label>
            <EditorToolbar />
             <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Create Post..."}
        modules={modules}
        formats={formats}
      />
         
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Add Media (Optional)</label>
            <input type="file" name="media" className="border-gray-300 rounded-md" />
          </div>

          <div className="text-right">
            <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded-md">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* Post Preview */}
    <div>
    </div>
        </>
  )
}

export default CreatePost