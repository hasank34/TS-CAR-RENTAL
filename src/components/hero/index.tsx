import { motion } from "framer-motion";
import Button from "../button";

const Hero = () => {
  const scroll = () => {
    const filter = document.querySelector("#filter");
    filter?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero">
      <div className="pt-10 padding-x flex-1 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla</h1>
        <p className="hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <Button
          handleClick={scroll}
          title="Arabaları Keşfet"
          designs="mt-10"
        ></Button>
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7, opacity: 0 }}
          animate={{ translateX: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          src="/hero.png"
          alt="gray bmw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
