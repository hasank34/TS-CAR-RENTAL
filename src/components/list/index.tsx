import { useEffect, useState } from "react";
import { fetchCars } from "./../../utils/fetchCars";
import { CarType } from "../../utils/types";
import Warning from "./Warning";
import Card from "./Card";
import Button from "../button";
import { useSearchParams } from "react-router-dom";

const List = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);
  const [params] = useSearchParams();
  // const paramss = {
  //   make: params.get("make"),
  //   model: params.get("model"),
  //   year: params.get("year"),
  //   fuel: params.get("fuel"),
  // };
  // yerine
  const paramsObj = Object.fromEntries(params.entries());

  //api'dan verileri al
  useEffect(() => {
    fetchCars({ limit, ...paramsObj })
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [limit, params]);
  // marka veya model değişince limit 5 çek
  useEffect(() => {
    setLimit(5);
  }, [params.get("make"), params.get("model")]);

  // 1- cars null ise > Henüz Apı'den cevap gelmemiştir
  // 2- isError true ise > Apı'den hatalı cevap gelmiştir
  // 3- cars [] ise > Aranılan kriterde araç yoktur.
  // 4- cars dolu[] ise > Apı'den veriler gelmiştir.
  return (
    <div className="padding-x max-width">
      {!cars ? (
        <Warning>
          <p>Yükleniyor...</p>
        </Warning>
      ) : isError ? (
        <Warning>Bir hata oluştu</Warning>
      ) : cars.length < 1 ? (
        <Warning>Aranılan kriterlere uygun sonuç bulunamadı</Warning>
      ) : (
        cars.length >= 1 && (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            <div className="w-full flex-center py-10">
              {limit < 30 && (
                <Button
                  title="Devamını Yükle"
                  handleClick={() => setLimit(limit + 5)}
                />
              )}
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default List;
