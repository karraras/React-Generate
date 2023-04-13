import React from "react";
import Data from "./data";
import newI from "../images/troll-face.png";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: newI,
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  function getMemeImage() {
    const Rand = Math.floor(Math.random() * Data.length);
    const url = allMemeImages.data.memes[Rand].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleText(event) {
    setMeme(function (previous) {
      return {
        ...previous,
        [event.target.name]: event.target.value,
      };
    });
  }
  // React.useState(function () {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((ret) => ret.json(ret))
  //     .then((data) => setAllMemeImages(data));
  // }, []);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data);
    }

    getMemes();
  }, []);

  return (
    <>
      <div className="form">
        <div className="input d-flex justify-content-between ">
          <input
            type="text"
            className="rounded p-2"
            placeholder="Shut up"
            onChange={handleText}
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            className="rounded p-2"
            placeholder="and take my money"
            onChange={handleText}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button className="btn" onClick={getMemeImage}>
          Get a new meme image 😆
        </button>
      </div>
      <div className="mime">
        <p className="TText">{meme.topText}</p>
        <p className="BText">{meme.bottomText}</p>
        <img
          className="my-img"
          src={meme.randomImage}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}
