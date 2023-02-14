import React from "react";
import "../sass/components/about.styles.scss";

const About = () => {
  return (
    <div>
      <section className="about">
        <div
          className="about-photo"
          style={{
            background: "url(../assets/img/about/vadym.jpg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundPositionY: '0'
          }}
        ></div>
        <div className="about-title">
          <h1> Vadym Kiiashko</h1>
        </div>
        <div className="about-subtitle">
          <h2> a short summary of experience and skills</h2>
        </div>
        <div className="about-cv">
          <div>
            <h4>On this page you'll find</h4>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ipsam nisi expedita veniam repudiandae nulla omnis. Voluptatem nobis
            rem impedit voluptatibus maxime temporibus voluptas, quibusdam minus
            voluptates ducimus, dolorum quam?
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            eligendi quod nihil et aliquam quidem at nam, vitae magni facere
            magnam in odio repellat sunt, illum, ullam quo quaerat!
            Reprehenderit! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Veniam fuga exercitationem labore optio, numquam alias
            perspiciatis voluptatibus odio provident nulla illum, cumque sequi
            ratione sapiente, enim minima nemo non soluta? Beatae quos
            voluptatum vitae mollitia! Quam officiis, quis consectetur
            voluptatem quasi iure atque fugiat incidunt in neque doloribus,
            exercitationem, quibusdam saepe nemo architecto maxime sunt id
            perspiciatis. Quasi, ipsam id! Suscipit ab eaque sed tempore in illo
            impedit, cum ipsum nemo deleniti molestias qui alias laboriosam quis
            nobis voluptatibus, magni sunt quo maiores natus. In nobis
            perspiciatis sint molestiae nisi.
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
