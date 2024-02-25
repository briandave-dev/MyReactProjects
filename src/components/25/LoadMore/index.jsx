import { useEffect, useState } from "react";

const LoadMore = ({}) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?.limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products.length && result.products) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 0) setDisabled(true);
  }, [products]);

  if (loading) {
    return (
      <div>
        <center>
          <h1>Loading...</h1>
        </center>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {products && products.length
          ? products.map((item, index) => (
              <div
                key={index}
                className="p-4 border border-black flex flex-col gap-2"
              >
                {/* <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-[120px] h-[100px]"
                /> */}
                <p>{index + 1}</p>
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="mb-5 pb-5">
        <center>
          <button
            disabled={disabled}
            className="p-4 border border-black font-bold bg-black text-white"
            onClick={() => setCount(count + 1)}
          >
            Load more
          </button>
          {
            disabled ? <div>No more data to load</div> : null
          }
        </center>
      </div>
    </div>
  );
};

export default LoadMore;
