import generateImage from "../../utils/generateImage";
import { CarType } from "../../utils/types";

const Image = ({ car }: { car: CarType }) => {
  console.log(Object.entries(car));
  return (
    <div className="flex-1 flex-col gap-3">
      {/* Büyük Resim */}
      <div className="w-full h-40 bg-pattern bg-center rounded-lg">
        <img
          src={generateImage(car)}
          alt={car.make + car.model + "facing right"}
          className="h-full mx-auto object-contain"
        />
      </div>
      {/* Küçük Resim */}
      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex  relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "29")}
            alt={car.make + car.model + "facing front"}
            className="mx-auto object-contain min-w-[146px]:"
          />
        </div>
        <div className="rounded flex-1 flex  relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "2")}
            alt={car.make + car.model + "from left"}
            className="mx-auto object-contain min-w-[146px]:"
          />
        </div>
        <div className="rounded flex-1 flex  relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "13")}
            alt={car.make + car.model + "facing behind"}
            className="mx-auto object-contain min-w-[146px]:"
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
