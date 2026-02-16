import { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const [preview, setPreview] = useState(null);

  const [message, setMessage] = useState("");

  const [progress, setProgress] = useState(0);

  const [uploading, setUploading] = useState(false);

  const [uploadFile, setUploadFile] = useState(null);

  console.log("progress", progress);

  const api = "http://localhost:3020";

  const onChange = async (e) => {
    const f = e.target.files[0];

    if (!f) return;

    setFile(f);
    setProgress(0);
    setMessage("");
    setUploadFile(null);

    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        reader.readAsDataURL(f);
      };
    } else {
      setPreview(null);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", file);

    try {
      const res = await axios.post(`${api}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (p) => {
          let progress = setProgress(Math.round((p.loaded * 100) / p.total));
          console.log("Inprogress", progress);
        },
      });

      setUploadFile(res.data.file);

      setMessage(res.data.message);

      // setProgress(0)
    } catch (err) {
      setMessage(err?.res?.data?.message || "upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div>FileUpload</div>
      <div>
        <h2>Upload Cloudinary</h2>
        <form action="" onSubmit={onSubmit}>
          <input type="file" name="file" id="" onChange={onChange} />
          {preview && <img src={preview} className="" alt="images"></img>}
          {progress > 0 && (
            <>
              <div>{progress}%</div>
              {message && <p>{message}</p>}
              {uploadFile && (
                <div>
                  <h1>UploadFiles</h1>
                  <h3>file list:</h3>
                  <p>{uploadFile.originalName}</p>
                </div>
              )}
              {uploadFile.format?.include("image") ? (
                <img src={uploadFile.url} className="" alt="images"></img>
              ) : (
                <a href={uploadFile.url}>View / Download Files</a>
              )}
            </>
          )}
          <button type="submit">{uploading ? "Uploading..." : "Upload"}</button>
        </form>
      </div>
    </>
  );
};

export default FileUpload;
