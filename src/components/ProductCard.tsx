import React from "react";

interface ProductProps {
  imageUrl: string;
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductProps> = ({
  imageUrl,
  name,
  description,
}) => {
  return (
    <div className="w-72 h-64">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-md shadow-2xl h-40 w-40"
      />
      <div>
        <h4 className="text-lg text-blue-800 font-bold pb-2 capitalize">
          {name}
        </h4>
        <p className="text-black text-md font-normal">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
