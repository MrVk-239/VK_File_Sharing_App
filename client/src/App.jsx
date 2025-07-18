import './App.css'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { uploadfile } from './service/api';




function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  console.log(file);
  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const getImage= async () => {
      if (file) {
        try {
          const data= new FormData();
          data.append('name', file.name);
          data.append('file', file);
          const response=await uploadfile(data);
          setResult(response.path);
          
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    };
    getImage();

  }, [file]);

    const fileInputRef = useRef();

  return (
    <>
    <div className="main-wrapper" style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
      <div className="container">
        <div className="wrapper">
          <h1>Vk File Sharing App!</h1>
          <p>Upload your files and share them with others.</p>
          <p>Click the button below to get started.</p>
          <p>Note: This is a demo app, so the files will not be saved permanently.</p>
          <button onClick={onUploadClick}>UPLOAD</button>
          <input type="file" ref={fileInputRef}  onChange={handleFileChange} style={{display: 'none'}} />
          {result && (
            <div className="result">
              <a href={result} target="_blank" rel="noreferrer">
                {result}
              </a>
              </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
