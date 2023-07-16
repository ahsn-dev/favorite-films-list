import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useListStore } from "../context/ListStore";
import genres from "./genres";
import { v4 as uuidv4 } from "uuid";

interface FormData {
  filmName: string;
  director: string;
  genre: string;
  productionYear: string;
  description: string;
}

const MovieForm = () => {
  const d: Date = new Date();
  const [item, setItem] = useState({
    filmName: "",
    director: "",
    genre: "",
    productionYear: "",
    description: "",
  });

  const { state, dispatch, editItem, setEditItem, onEdit, setOnEdit } =
    useListStore();

  const handleFormSubmit = (data: FormData) => {
    const isValid =
      data.filmName &&
      data.director &&
      data.genre &&
      data.productionYear &&
      data.description;
    if (isValid) {
      if (onEdit === false) {
        const itemID = { ...data, id: uuidv4() };
        dispatch({ type: "ADD_TO_LIST", payload: itemID });
        setItem({
          filmName: "",
          director: "",
          genre: "",
          productionYear: "",
          description: "",
        });
      } else {
        dispatch({ type: "IS_EDIT_LIST", payload: data });
        setOnEdit(false);
      }
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
    if (onEdit === true) {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      filmName: "",
      director: "",
      genre: "",
      productionYear: "",
      description: "",
    },
    mode: "onBlur",
  });

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                type="text"
                placeholder="نام فیلم را بنویسید"
                className={`input input-bordered border-gray-400 text-[#C6C6C6] focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] placeholder:text-[#C6C6C6] placeholder:text-xs ${
                  errors.filmName ? "border-red-500" : ""
                }`}
                {...register("filmName", {
                  required: "نام فیلم الزامی است",
                  minLength: {
                    value: 2,
                    message: "نام فیلم باید حداقل دو حرفی باشد",
                  },
                })}
                value={item.filmName}
                onChange={(e) => setItem({ ...item, filmName: e.target.value })}
              />
              {errors.filmName && (
                <span className="text-red-500 pt-2">
                  {errors.filmName.message}
                </span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label justify-normal gap-x-2">
                <span className="w-2 h-5 rounded-sm bg-yellow-400"></span>
                <span className="label-text text-[#C6C6C6] font-bold">
                  کارگردان
                </span>
              </label>
              <input
                type="text"
                placeholder="نام کارگردان را بنویسید"
                className={`input input-bordered focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs ${
                  errors.director ? "border-red-500" : ""
                }`}
                {...register("director", {
                  required: "نام کارگردان الزامی است",
                })}
                value={item.director}
                onChange={(e) => setItem({ ...item, director: e.target.value })}
              />
              {errors.director && (
                <span className="text-red-500 pt-2">
                  {errors.director.message}
                </span>
              )}
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
                className={`select select-bordered bg-[#515050] focus:outline-0 focus:border-yellow-500 text-xs text-[#C6C6C6] border-gray-400 ${
                  errors.genre ? "border-red-500" : ""
                }`}
                {...register("genre", {
                  required: "ژانر فیلم الزامی است",
                })}
                value={item.genre}
                onChange={(e) => setItem({ ...item, genre: e.target.value })}
              >
                <option value="">یک ژانر انتخاب کنید</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              {errors.genre && (
                <span className="text-red-500 pt-2">
                  {errors.genre.message}
                </span>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label justify-normal gap-x-2">
                <span className="w-2 h-5 rounded-sm bg-yellow-400"></span>
                <span className="label-text text-[#C6C6C6] font-bold">
                  سال تولید
                </span>
              </label>
              <input
                type="number"
                placeholder="سال ساخت فیلم را وارد کنید"
                className={`appearance-none input input-bordered focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs ${
                  errors.productionYear ? "border-red-500" : ""
                }`}
                {...register("productionYear", {
                  required: "سال ساخت فیلم الزامی است",
                  min: {
                    value: 1895,
                    message: `سال ساخت باید بین ۱۸۹۵ تا ${d.getFullYear()} باشد`,
                  },
                  max: {
                    value: d.getFullYear(),
                    message: `سال ساخت باید بین ۱۸۹۵ تا ${d.getFullYear()} باشد`,
                  },
                })}
                value={item.productionYear}
                onChange={(e) =>
                  setItem({ ...item, productionYear: e.target.value })
                }
              />
              {errors.productionYear && (
                <span className="text-red-500 pt-2">
                  {errors.productionYear.message}
                </span>
              )}
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
                placeholder="توضیحات درباره فیلم"
                className={`textarea textarea-bordered focus:border-warning focus:outline-none h-24 bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs ${
                  errors.description ? "border-red-500" : ""
                }`}
                {...register("description", {
                  required: "توضیحات الزامی است",
                })}
                value={item.description}
                onChange={(e) =>
                  setItem({ ...item, description: e.target.value })
                }
              />
              {errors.description && (
                <span className="text-red-500 pt-2">
                  {errors.description.message}
                </span>
              )}
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
