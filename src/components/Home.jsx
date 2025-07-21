import backgroundImage from '../assets/kaba.jpeg'
const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        color: 'white',
      }}
    >
      <h1>Välkommen till Hajj & Umrah</h1>
    </div>
  );
};
export default HeroSection