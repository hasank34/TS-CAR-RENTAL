import generateImage from "../../utils/generateImage";
import { CarType } from "../../utils/types";
import Button from "../button";
import Modal from "../modal";
import Info from "./Info";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  car: CarType;
};
const Card = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);

    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsOpen(false);

    document.body.style.overflow = "auto";
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="car-card group"
    >
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      {/* araba fiyatı */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        {/* 1500 - 8500 arası sayı */}
        <span className="text-[32px]">
          {Math.round(Math.random() * 7000 + 1500)}
        </span>
        <span className="font-semibold self-end">/gün</span>
      </div>
      {/* resim alanı */}
      <div className="w-full">
        <img
          src={generateImage(car)}
          className="w-full h-full object-contain"
          alt={car.make + car.model}
        />
      </div>
      {/* alt kısım */}
      <div className="w-full ">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>
        <div className="mt-[4px] hidden group-hover:flex ">
          <Button
            icon="right-arrow.svg"
            title="Daha Fazla"
            designs="w-full py-[25px] text-white"
            handleClick={handleOpen}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} close={handleClose} car={car} />
    </motion.div>
  );
};

export default Card;
