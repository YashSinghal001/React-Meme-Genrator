import React, { useEffect, useState } from 'react'
// import image from './Componets'


export const Meme = () => {
    const [meme, setMeme] = useState({
        author:"",
        title:"",
        url:""

    })

    function fetchMeme(){
        fetch("https://meme-api.com/gimme")
        .then(res => res.json())
        .then(data => setMeme(data))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchMeme();
      }, []);
  return (
    <div>
  <h1 style={{textAlign:'center'}}>Random Memes Generator</h1>
<div className="btnn">
{/* <button className='memebtn' onClick={fetchMeme}>Click me </button> */}
<button class="c-button c-button--gooey"  onClick={fetchMeme}> Generate Meme
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: "block", height: "0", width: "0"}}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg>


</div>
<div className="box" >
<h2>Title:{meme.title}</h2>
<br />
<img src={meme.url} alt=""  width={"300px"} height={"300px"}/>
<br />
<h4>Author:{meme.author}</h4>
</div>




    </div>
  )
}
