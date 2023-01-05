import React from "react";
import "../../sass/components/icons.styles.scss";

const Icon = ({ iconSource, iconTitle }) => {
  return (
    <div className='icon-container'>
      <div className='icon-img'>
        <img
          src={`../assets/img/banner/icons/${iconSource}.svg`}
          alt=''
          srcset=''
        />
      </div>
      <span className='icon-title'>{iconTitle}</span>
      <div className='icon-text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        temporibus odio soluta dignissimos placeat iste eius in omnis sint
        nesciunt. Eos libero alias nisi eveniet magni! Quasi suscipit maiores
        nisi? Nulla odio doloremque maxime, delectus, enim in minus doloribus,
        quibusdam vitae nobis a. Vel omnis iure autem facere ducimus ex debitis
        ullam. Ipsa obcaecati, quas voluptates assumenda nobis optio
        voluptatibus!
      </div>
    </div>
  );
};

export default Icon;
