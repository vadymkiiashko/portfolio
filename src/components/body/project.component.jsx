import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../utils/data.js";
import "../../sass/components/project-card.styles.scss";
import { useState } from "react";

const Project = () => {
  const { id } = useParams();
  const { name, externalUrl, thumbnails, info } = projects.find(
    (proj) => proj.id === Number(id.slice(1))
  );
  const [currentImg, setCurrentImg] = useState(0);

  const handleCarouselClick = (e) => {
    let imagesLength = thumbnails.length - 1;
    const clicked = e.target.closest(".arrow");
    if (!clicked) return;
    if (clicked.classList.value.includes("arrow_right")) {
      if (currentImg === imagesLength) {
        setCurrentImg(0);
      } else {
        setCurrentImg((currentImg) => (currentImg += 1));
      }
    } else {
      if (currentImg === 0) {
        setCurrentImg(imagesLength);
      } else {
        setCurrentImg((currentImg) => (currentImg -= 1));
      }
    }
  };

  return (
    <div className='project-container'>
      <h1>{name}</h1>
      <div className='project-thumbnails'>
        <div
          className='thumbnails-arrows'
          onClick={(e) => handleCarouselClick(e)}>
          <div className='arrow arrow_left'>
            <img
              src='../assets/img/banner/arrows/left_arrow.svg'
              alt='left arrow'
            />
          </div>
          <div className='arrow arrow_right'>
            <img
              src='../assets/img/banner/arrows/right_arrow.svg'
              alt='left arrow'
            />
          </div>
        </div>
        <div className='thumbnail-picture'>
          {thumbnails.map((thumbnail) => (
            <img
              className='picture'
              src={thumbnail}
              alt='bankist app screenshot'
              style={{ transform: `translateX(-${100 * currentImg}%)` }}
            />
          ))}
        </div>
      </div>
      <div className='project-about'>
        <span className='project-description'>{info.about}</span>
      </div>
      <a href={externalUrl} target='blank'>
        <div className='redirect'>
          <span>take me to site {name}</span>
        </div>
      </a>
    </div>
  );
};

export default Project;
