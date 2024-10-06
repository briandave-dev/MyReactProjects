import React, { useEffect, useState } from 'react';
import useGetProducts from './useGetProducts';

const Requests = () => {
  const { error, loading, products } = useGetProducts()

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-lg">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Products List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.short_desc || 'No description available'}</p>
            <span
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold 
                ${product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
              `}
            >
              {product.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;