import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createComplaint, updateComplaint } from '../actions/complaints';

const FormComplaint = () => {
  const [currentId, setCurrentId] = useState(0);
  const [postData, setPostData] = useState({ laporan: '', tanggapan: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.complaints.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const clear = () => {
    setCurrentId(0);
    setPostData({ laporan: '', tanggapan: '', selectedFile: '' });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createComplaint({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updateComplaint(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <div>
        <p>Please Sign In to create your own memories and like other's memories.</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Masukkan pengaduan</p>
        <input name="pengaduan" variant="outlined" label="pengaduan" value={postData.laporan} onChange={(e) => setPostData({ ...postData, laporan: e.target.value })} />
        <input name="laporan" variant="outlined" label="laporan" value={postData.tanggapan} onChange={(e) => setPostData({ ...postData, tanggapan: e.target.value })} />

        <div>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <button type="submit">Submit</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
};

export default FormComplaint;
