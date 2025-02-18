import { CarType } from "../../utils/types";
import Image from "./Image";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  car: CarType;
  isOpen: boolean;
  close: () => void;
}
const Modal = ({ car, isOpen, close }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 grid place-items-center backdrop-blur">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-white relative p-6 max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            <button
              aria-label="close modal"
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
              onClick={close}
            >
              <img src="/close.svg" alt="x" />
            </button>
            {/* fotoğraflar */}
            <Image car={car} />
            {/* bilgiler */}
            {Object.entries(car).map(([key, value]) => (
              <p key={key} className="flex justify-between ">
                <span className="capitalize">{key.split("_").join(" ")}</span>
                <span className="capitalize font-semibold">{value}</span>
              </p>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
