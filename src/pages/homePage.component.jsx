import React from "react";
import { useState } from "react";
import "../sass/components/home.styles.scss";
import UpArrow from "../components/upArrow";
import Icon from "../components/body/icons";

const Home = () => {
  const [banner, setBanner] = useState(1);
  //change to read the number of files in the folder
  let numberOfBanners = 2;
  const handleCklick = (e) => {
    const clicked = e.target.closest(".arrow");
    console.log(clicked.classList.value.includes("arrow-right"));
    if (!clicked) return;
    if (clicked.classList.value.includes("arrow-right")) {
      if (banner === numberOfBanners) {
        setBanner(1);
      } else setBanner((banner) => banner + 1);
    } else {
      if (banner === 1) {
        setBanner(numberOfBanners);
      } else {
        setBanner((banner) => banner - 1);
      }
    }
  };

  return (
    <div>
      <section className='banner' id='banner'>
        <div
          className='banner-image'
          style={{
            backgroundImage: `linear-gradient(
              rgba(22, 34, 60, 0.85), 
              rgba(10, 10, 10, 0.45)
            ),url(../assets/img/banner/banner-${banner}.jpg)`,
          }}>
          <div className='titles'>
            <h1>Sample Website with projects</h1>
            <h2>Projects done by Vadym Kiiashko over the years</h2>
          </div>
        </div>
        <div className='arrows'>
          <button className='arrow arrow-left' onClick={(e) => handleCklick(e)}>
            <img
              src='../assets/img/banner/arrows/left_arrow.svg'
              alt='left arrow'
            />
          </button>
          <button
            className='arrow arrow-right'
            onClick={(e) => handleCklick(e)}>
            <img
              src='../assets/img/banner/arrows/right_arrow.svg'
              alt='left arrow'
            />
          </button>
        </div>
      </section>

      <section id='overview'>
        <h2>Overview</h2>
        <div className='icons'>
          <Icon iconTitle='education' iconSource='education' />
          <Icon iconTitle='experience' iconSource='experience' />
          <Icon iconTitle='hobbies' iconSource='education' />
          <Icon iconTitle='skills' iconSource='skills' />
        </div>
      </section>
      <UpArrow target='banner' />
    </div>
  );
};

export default Home;
