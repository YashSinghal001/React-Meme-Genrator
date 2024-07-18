
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Mems = () => {
  const [meme, setMeme] = useState(null)
  const fetchMemes = async () => {
    try {
      const resp = await axios.get("https://api.imgflip.com/get_memes");
      const memes = resp.data.data.memes;
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      setMeme(randomMeme)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMemes();
  }, []);
  return (
    <div>
      <h1>Random Memes Generator</h1>
      <button onClick={fetchMemes}>Change Memes</button>
      {meme && (
        <div>
          <p>{meme.name}</p>
          <img src={meme.url} alt="" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  )
}

export default Mems
