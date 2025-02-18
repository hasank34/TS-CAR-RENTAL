import { CarType } from "./types";

const options = {
  headers: {
    "x-rapidapi-key": "eed126f9bcmshc5525da323f2af8p1ab61fjsn34753381407b",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
type Parametres = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};

export const fetchCars = async ({
  limit,
  make = "bmw",
  model = "",
  fuel_type = "",
  year = "",
}: Parametres): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;
    const res = await fetch(url, options);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error("Verileri alırken bir sorun oluştu");
  }
};
