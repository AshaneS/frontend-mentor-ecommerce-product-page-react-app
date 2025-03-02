import image from "../assets/image-product-1.jpg";
import image1_thumb from "../assets/image-product-1-thumbnail.jpg";
import image2_thumb from "../assets/image-product-2-thumbnail.jpg";
import image3_thumb from "../assets/image-product-3-thumbnail.jpg";
import image4_thumb from "../assets/image-product-4-thumbnail.jpg";
const Leftcard = () => {
  return (
    <div className="md:grid md:gap-8">
      <div className="-mx-8 md:-mx-0 ">
        <img src={image} className="h-72 w-full object-cover md:h-auto md:w-auto md:rounded-2xl"></img>
      </div>
       <div className="hidden md:flex md:justify-between md:items-center md:gap-6">
        <img src={image1_thumb} alt=""  className="min-h-16 min-w-16 object-cover rounded-lg"/>
        <img src={image2_thumb} alt=""  className="min-h-16 min-w-16 object-cover rounded-lg"/>
        <img src={image3_thumb} alt=""  className="min-h-16 min-w-16 object-cover rounded-lg"/>
        <img src={image4_thumb} alt=""  className="min-h-16 min-w-16 object-cover rounded-lg"/>
      </div>
    </div>
  );
};
export default Leftcard;
