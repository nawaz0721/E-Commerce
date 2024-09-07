import one from "../images/imageone.avif";
import two from "../images/imagetwo.avif";
import three from "../images/imagethree.avif";

const ThreeProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
    </div>
  );
};

const ThreeProducts = () => {
  return (
    <div className="product-grid">
      <ThreeProductCard
        image={one}
        title={"Tree Runner Go"}
        description={"Airy, Packable, Travel Ready"}
      />
      <ThreeProductCard
        image={two}
        title="Tree Breezer"
        description="Sleek Flat, Now in New Knits"
      />
      <ThreeProductCard
        image={three}
        title="Tree Glider"
        description="Sleek, Springy Athleisure Style"
      />
    </div>
  );
};

export default ThreeProducts;
