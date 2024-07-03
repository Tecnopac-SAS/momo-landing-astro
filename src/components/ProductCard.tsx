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
    <div className="w-72 h-96">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-lg text-blue-800 font-bold pb-2">{name}</h4>
        <p className="text-black text-md">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
