import { useState } from "react";
import axios from "axios";
const FilesAdd = () => {
  const [state, setState] = useState({
    rid: "",
    type: "",
    title: "",
    selectedFile: null,
    filename: null,
  });

  const fileSelectedHandler = (event) => {
    let file = event.target.files[0].name;
    setState({
      selectedFile: event.target.files[0],
      filename: document.getElementById("file").value,
    });
    console.log(file);
  };
  const fileUploadhandler = (event) => {
    event.preventDefault();

    let rid = document.getElementById("rid").value;
    let type = document.getElementById("type").value;
    let title = document.getElementById("title").value;
    // let file = event.target.files[0].name;
    //let filename = document.getElementById("file").value;

    let formData = new FormData();
    formData.append("rid", rid);
    formData.append("type", type);
    formData.append("title", title);
    formData.append("filename", state.filename);
    formData.append("file", state.selectedFile);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    let control = true;
    axios
      .post("http://127.0.0.1:8000/filesAPI", formData, config)
      .then((res) => {
        if (res.status != 200) {
          control = false;
        }
      });
    if (control) {
      document.getElementById("success").innerHTML = "Uploaded Successfully";
    }
  };
  return (
    <>
      <h1 id="success"></h1>
      <form
        id="form1"
        encType="multipart/form"
        className="w-[90vmin] lg:w-[80vmin] p-5 mb-4"
      >
        <input type="text" id="rid" placeholder="Enter rid of file...."></input>
        <input
          type="text"
          id="type"
          placeholder="Enter type of file..."
        ></input>
        <br></br>
        <br></br>
        <input
          type="text"
          id="title"
          placeholder="Enter title of file..."
        ></input>
        <br></br>
        <br></br>
        <input
          type="file"
          name="file"
          id="file"
          placeholder="Upload your file"
          onChange={fileSelectedHandler}
        />
        <button
          className="button bg-mustardyellow text-black p-3 font-bold"
          type="submit"
          onClick={fileUploadhandler}
        >
          Add Products
        </button>
      </form>
    </>
  );
};
export default FilesAdd;
