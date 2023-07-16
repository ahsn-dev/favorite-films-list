import { useState, FormEvent } from "react";

const MovieForm = () => {
  const [movie, setMovie] = useState({
    filmName: "",
    director: "",
    genre: "یک ژانر انتخاب کنید",
    productionYear: "",
    description: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(movie);

    setMovie({
      filmName: "",
      director: "",
      genre: "یک ژانر انتخاب کنید",
      productionYear: "",
      description: "",
    });
  };

  const handleClearForm = () => {
    setMovie({
      filmName: "",
      director: "",
      genre: "یک ژانر انتخاب کنید",
      productionYear: "",
      description: "",
    });
  };

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
                onChange={(event) =>
                  setMovie({ ...movie, filmName: event.target.value })
                }
                // controlled component
                value={movie.filmName}
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
                  setMovie({ ...movie, director: event.target.value })
                }
                // controlled component
                value={movie.director}
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
                  setMovie({ ...movie, genre: event.target.value })
                }
                // controlled component
                value={movie.genre}
                // defaultValue={"یک ژانر انتخاب کنید"}
                className="select select-bordered bg-[#515050] focus:outline-0 focus:border-yellow-500 text-xs text-[#C6C6C6] border-gray-400"
              >
                <option value={""}>یک ژانر انتخاب کنید</option>
                <option>اکشن</option>
                <option>ماجراجویی</option>
                <option>کمدی</option>
                <option>درام</option>
                <option>فانتزی</option>
                <option>تاریخی</option>
                <option>ترسناک</option>
                <option>علمی‌تخیلی</option>
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
                  setMovie({ ...movie, productionYear: event.target.value })
                }
                // controlled component
                value={movie.productionYear}
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
                  setMovie({ ...movie, description: event.target.value })
                }
                // controlled component
                value={movie.description}
                className="textarea textarea-bordered focus:border-warning focus:outline-none h-24 bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
                placeholder="توضیحات درباره فیلم"
              ></textarea>
            </div>
            <div className="flex self-end gap-x-4">
              <button
                type="submit"
                className="btn btn-warning py-0 px-12 border-0 bg-[#F9C90B] text-[#79704B] border-gray-400"
              >
                ذخیره
              </button>
              <button
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
