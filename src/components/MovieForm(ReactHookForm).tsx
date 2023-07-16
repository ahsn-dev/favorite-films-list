import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  filmName: string;
  director: string;
  genre: string;
  productionYear: number;
  description: string;
}

const MovieForm = () => {
  const d: Date = new Date();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("filmName", { required: true, minLength: 2 })}
                type="text"
                placeholder="نام فیلم را بنویسید"
                className="input input-bordered border-gray-400 text-[#C6C6C6] focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] placeholder:text-[#C6C6C6] placeholder:text-xs"
              />
              {errors.filmName?.type === "required" && (
                <span className="text-red-500 pt-2">نام فیلم الزامی است</span>
              )}
              {errors.filmName?.type === "minLength" && (
                <span className="text-red-500 pt-2">
                  نام فیلم باید حداقل دو حرفی باشد
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
                {...register("director", { required: true, minLength: 2 })}
                type="text"
                placeholder="نام کارگردان را وارد کنید"
                className="input input-bordered focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
              />
              {errors.director?.type === "required" && (
                <span className="text-red-500 pt-2">
                  نام کارگردان الزامی است
                </span>
              )}
              {errors.director?.type === "minLength" && (
                <span className="text-red-500 pt-2">
                  نام کارگردان باید حداقل دو حرفی باشد
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
                {...register("genre", { required: true })}
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
              {errors.genre?.type === "required" && (
                <span className="text-red-500 pt-2">ژانر فیلم الزامی است</span>
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
                {...register("productionYear", {
                  required: true,
                  min: 1895,
                  max: d.getFullYear(),
                })}
                type="number"
                placeholder="سال ساخت فیلم را وارد کنید"
                className="appearance-none input input-bordered focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
              />
              {errors.productionYear?.type === "required" && (
                <span className="text-red-500 pt-2">
                  سال ساخت فیلم الزامی است
                </span>
              )}
              {errors.productionYear?.type === "min" && (
                <span className="text-red-500 pt-2">
                  سال ساخت باید بین ۱۸۹۵ تا {d.getFullYear()} باشد
                </span>
              )}
              {errors.productionYear?.type === "max" && (
                <span className="text-red-500 pt-2">
                  سال ساخت باید بین ۱۸۹۵ تا {d.getFullYear()} باشد
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
                {...register("description", { required: true, minLength: 8 })}
                className="textarea textarea-bordered focus:border-warning focus:outline-none h-24 bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
                placeholder="توضیحات درباره فیلم"
              ></textarea>
              {errors.description?.type === "required" && (
                <span className="text-red-500 pt-2">توضیحات الزامی است</span>
              )}
              {errors.description?.type === "minLength" && (
                <span className="text-red-500 pt-2">
                  توضیحات باید حداقل هشت حرفی باشد
                </span>
              )}
            </div>
            <div className="flex self-end gap-x-4">
              <button
                type="submit"
                className="btn btn-warning py-0 px-12 border-0 bg-[#F9C90B] text-[#79704B] border-gray-400"
              >
                ذخیره
              </button>
              <button
                // onClick={handleClearForm}
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
