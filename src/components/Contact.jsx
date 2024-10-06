import Accordion from "./25/Accordion/Accordion";
import CreateRandomValue from "./25/Random-color";
import "../App.css";
import Stars from "./25/Stars";
import ImageSlider from "./25/Image-slider";
import LoadMore from "./25/LoadMore";
import TicTacToe from "./25/tictactoe";
import Filter from "./25/Filter/Filter";
import Debounce from "./25/Debounce/Debounce";
import Requests from "./SOLID/SingleResponsabilityComponents/Requests"

const Contact = () => {
  const products = ["Banana", "Orange", "Apple", "Pineapple"];

  return (
    <>
      {/* <Accordion/> 
            <CreateRandomValue/> 
            <Stars noOfStars= {5}/> 
            <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={2}/>
            <LoadMore /> 
            <Calculator /> 
        */}
        {/* <TicTacToe /> */}
        {/* <Filter products={products} /> */}
        {/* <Debounce /> */}

        <Requests />
    </>
  );
};

export default Contact;
