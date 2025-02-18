import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
// import { useRecoilState } from "recoil";
// import { productData } from "../../Atom";
import productsData from "../../Assets/Data/ProductsData.json";

const PrizeDraws = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [products, setProducts] = useState(productsData); // Uncomment if using Recoil

  useEffect(() => {
    const handleResize = () => {
      const zoomLevel = window.devicePixelRatio || 1;
      setIsZoomed(zoomLevel >= 1.5 || zoomLevel >= 2);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(productsData);
  return (
    <div className="container">
      <div className="row">
        <h1 className="Prizes text-center mt-4">Limited-Time Prize Draws</h1>
        {productsData.products.length > 0 ? (
          productsData.products.map((product) => (
            <div key={product.id} className={"col-md-6"}>
              <ProductCard Product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No products available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrizeDraws;
