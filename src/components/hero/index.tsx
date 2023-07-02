import './index.css';

const Hero = (): JSX.Element => {
  return (
    <header className="container hero">
      <h1 className="hero__header">Find the university that’s right for you.<span className="hero__subheader">Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</span></h1>
      <div className="hero__image-container">
        <img
          className="hero__image"
          src="./wanderer.jpg"
          height={384}
          width={384}
          loading="lazy"
          alt="Caspar David Friedrich's Wanderer Above the Sea of Fog painting"
        />
      </div>
    </header>
  );
};

export default Hero;
