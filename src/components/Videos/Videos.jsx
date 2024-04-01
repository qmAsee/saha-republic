import "./Videos.css";
// import React from 'react';

const Videos = () => {
  return (
    <section className="videos">
      <h2 className="videos__title">Узнать больше</h2>
      <div className="videos__wrapper">
        <iframe
          width="470"
          height="315"
          src="https://www.youtube.com/embed/PXrZ4X9834Q?si=F4IRXy1rATfb0XWQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="470"
          height="315"
          src="https://www.youtube.com/embed/3-8lBgMB1F0?si=tw9n0lws7Bba8Tj3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Videos;
