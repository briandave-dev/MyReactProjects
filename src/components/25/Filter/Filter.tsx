import React, { useState } from "react";

// Define the type for the props
type FilterComponentProps = {
  products: string[];
};

// Accept props in the component and use them
const Filter: React.FC<FilterComponentProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearchTerm(e.target.value);
  };

  const highlightText = (product: string, searchTerm: string) => {
    if (!searchTerm) return product;

    const index = product.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index === -1) return product;

    const beforeMatch = product.slice(0, index);
    const match = product.slice(index, index + searchTerm.length);
    const afterMatch = product.slice(index + searchTerm.length);

    return (
      <>
        {beforeMatch}
        <strong className="underline">{match}</strong>
        {afterMatch}
      </>
    );
  };

  // Filter products based on the search term
  const filteredProducts: string[] = products.filter((product) =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mt-10 grid place-items-center">
        <input
          className="border-2 border-black"
          type="text"
          placeholder="Search here..."
          onChange={handleChange}
        />
        <div className="flex flex-col justify-center items-center gap-5">
          {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
            <div key={index}>
              {highlightText(product, searchTerm)}
            </div>
          )) : <div>No results</div> }
        </div>
      </div>
    </>
  );
};

export default Filter;
