import { useEffect, useState } from "react";
import { useListStore } from "../context/ListStore";
import genres from "./genres";
import { v4 as uuidv4 } from "uuid";

const MovieForm = () => {
  const [item, setItem] = useState({
    filmName: "",
    director: "",
    genre: "",
    productionYear: "",
    description: "",
  });

  const { state, dispatch, editItem, setEditItem, onEdit, setOnEdit } =
    useListStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onEdit == false) {
      const itemID = { ...item, id: uuidv4() };

      dispatch({ type: "ADD_TO_LIST", payload: itemID });

      setItem({
        filmName: "",
        director: "",
        genre: "",
        productionYear: "",
        description: "",
      });
    } else {
      dispatch({ type: "IS_EDIT_LIST", payload: item });
      setOnEdit(false);
    }
  };

  const handleClearForm = () => {
    setItem({
      filmName: "",
      director: "",
      genre: "",
      productionYear: "",
      description: "",
    });
  };

  useEffect(() => {
    if (onEdit == true) {
      setItem({
        filmName: editItem.filmName,
        director: editItem.director,
        genre: editItem.genre,
        productionYear: editItem.productionYear,
        description: editItem.description,
      });
    } else {
      setItem({
        filmName: "",
        director: "",
        genre: "",
        productionYear: "",
        description: "",
      });
    }
  }, [onEdit]);
  // console.log(onEdit);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="p-16 bg-[#515050] flex justify-between items-center">
          <div className="flex flex-col gap-y-12 w-full">
            <div className="form-control w-full max-w-xs">
              <label className="label justify-normal gap-x-2">
                <span className="w-2 h-5 rounded-sm bg-yellow-400"></span>
                <span className="label-text text-[#C6C6C6] font-bold">
                  نام فیلم
                </span>
              </label>
              <input
                onChange={(event) => {
                  setItem({ ...item, filmName: event.target.value });
                }}
                value={item.filmName}
                type="text"
                placeholder="نام فیلم را بنویسید"
                className="input input-bordered border-gray-400 text-[#C6C6C6] focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] placeholder:text-[#C6C6C6] placeholder:text-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label justify-normal gap-x-2">
                <span className="w-2 h-5 rounded-sm bg-yellow-400"></span>
                <span className="label-text text-[#C6C6C6] font-bold">
                  کارگردان
                </span>
              </label>
              <input
                onChange={(event) =>
                  setItem({ ...item, director: event.target.value })
                }
                value={item.director}
                type="text"
                placeholder="نام کارگردان را وارد کنید"
                className="input input-bordered focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-12 w-full">
            <div className="form-control w-full max-w-xs">
              <label className="label justify-normal gap-x-2">
                <span className="w-2 h-5 rounded-sm bg-yellow-400"></span>
                <span className="label-text text-[#C6C6C6] font-bold">
                  ژانر فیلم
                </span>
              </label>
              <select
                onChange={(event) =>
                  setItem({ ...item, genre: event.target.value })
                }
                value={item.genre}
                className="select select-bordered bg-[#515050] focus:outline-0 focus:border-yellow-500 text-xs text-[#C6C6C6] border-gray-400"
              >
                <option value={""}>یک ژانر انتخاب کنید</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label justify-normal gap-x-2">
                <span className="w-2 h-5 rounded-sm bg-yellow-400"></span>
                <span className="label-text text-[#C6C6C6] font-bold">
                  سال تولید
                </span>
              </label>
              <input
                onChange={(event) =>
                  setItem({ ...item, productionYear: event.target.value })
                }
                value={item.productionYear}
                type="number"
                placeholder="سال ساخت فیلم را وارد کنید"
                className="appearance-none input input-bordered focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-12 w-full">
            <div className="form-control">
              <label className="label justify-normal gap-x-2">
                <span className="w-2 h-5 rounded-sm bg-yellow-400"></span>
                <span className="label-text text-[#C6C6C6] font-bold">
                  توضیحات
                </span>
              </label>
              <textarea
                onChange={(event) =>
                  setItem({ ...item, description: event.target.value })
                }
                value={item.description}
                className="textarea textarea-bordered focus:border-warning focus:outline-none h-24 bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
                placeholder="توضیحات درباره فیلم"
              ></textarea>
            </div>
            <div className="flex self-end gap-x-4">
              <button
                type="submit"
                className="btn btn-warning py-0 px-12 border-0 bg-[#F9C90B] text-[#79704B] border-gray-400"
              >
                {onEdit == true ? "ویرایش" : "ذخیره"}
              </button>
              <button
                type="button"
                onClick={handleClearForm}
                className="btn btn-outline py-0 px-12 text-[#C6C6C6] border-gray-400"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MovieForm;
