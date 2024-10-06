import React, { useEffect, useState } from 'react';

const useGetProducts = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost/zenitheinsurance/router.php?key=${apiKey}&route=get-products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { error, loading, products }
};

export default useGetProducts;