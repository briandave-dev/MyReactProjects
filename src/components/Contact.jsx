import Accordion from "./25/Accordion/Accordion";
import CreateRandomValue from "./25/Random-color";
import "../App.css";
import Stars from "./25/Stars";
import ImageSlider from "./25/Image-slider";
import LoadMore from "./25/LoadMore";
import TicTacToe from "./25/tictactoe";
import Filter from "./25/Filter/Filter";
import Debounce from "./25/Debounce/Debounce";
import Requests from "./SOLID/SingleResponsabilityComponents/Requests";
import { ThemeContext } from "./ThemeContext";
import Test from "./test/Test";
import Todos from "./test/Todos";
import Auth from "./test/Auth";

import Calculator from "./25/calculator";

const Contact = () => {
  const products = ["Banana", "Orange", "Apple", "Pineapple"];

  return (
    <>
      <Accordion />
      <CreateRandomValue />
      <Stars noOfStars={5} />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={2} />
      <LoadMore />
      <Calculator />
      {/* <TicTacToe /> */}
      {/* <Filter products={products} /> */}
      {/* <Debounce /> */}

      {/* <Requests /> */}
      {/* <Test /> */}
      {/* <Todos /> */}
      {/* <Calculator /> 
        {/* <Auth /> */}
    </>
  );
};

export default Contact;
