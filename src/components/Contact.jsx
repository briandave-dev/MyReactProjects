import Accordion from "./25/Accordion/Accordion";
import CreateRandomValue from "./25/Random-color";
import "../App.css"
import Stars from "./25/Stars";
import ImageSlider from "./25/Image-slider";
import LoadMore from "./25/LoadMore";

const Contact = () => {
    return ( 
        <>
            {/* <Accordion/> 
            <CreateRandomValue/> 
            <Stars noOfStars={5}/> 
            <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={2}/> */}
            <LoadMore />
        </>
     );
}
 
export default Contact;