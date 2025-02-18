import ReactSelect from "react-select";
import { makes } from "./../../utils/constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>(params.get("make") || "");
  const [model, setModel] = useState<string>(params.get("model") || "");

  const options = useMemo(
    () =>
      makes.map((make) => ({
        value: make,
        label: make,
      })),
    []
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // marka ve model url arama parametresi olarak ekle
    setParams({ make, model });
  };

  // urldeki seçili markayı al
  const selected = {
    label: params.get("make") || "",
    value: params.get("make") || "",
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-4">
      <div className="searchbar__item">
        <ReactSelect
          onChange={(e) => setMake(e!.value)}
          className="w-full text-black"
          options={options}
          placeholder="Marka Seçiniz..."
          defaultValue={selected}
          aria-label="search"
        />
        <button className="ml-3 sm:hidden">
          <img alt="magnifying glass" src="/search.svg" className="size-10" />
        </button>
      </div>
      <div className="searchbar__item">
        <label htmlFor="model" className="absolute ml-4">
          <img src="/model-icon.png" alt="car from front" width={25} />
        </label>
        <input
          title="search for spesific model"
          id="model"
          type="text"
          className="searchbar__input rounded text-black"
          placeholder="Örn: Mondeo"
          onChange={(e) => setModel(e.target.value)}
          defaultValue={params.get("model") || ""}
        />
        <button aria-label="search" className="ml-3">
          <img alt="magnifying glass" src="/search.svg" className="size-10" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
