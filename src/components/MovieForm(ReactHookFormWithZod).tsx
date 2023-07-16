import genres from "./genres";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// zod
const d: Date = new Date();
const schema = z.object({
  filmName: z
    .string()
    .nonempty({ message: "نام فیلم الزامی است" })
    .min(2, { message: "نام فیلم باید حداقل دو حرفی باشد" }),

  director: z
    .string()
    .nonempty({ message: "نام کارگردان الزامی است" })
    .min(2, { message: "نام کارگردان باید حداقل دو حرفی باشد" }),

  genre: z.enum(genres, {
    errorMap: () => ({ message: "ژانر فیلم الزامی است" }),
  }),

  productionYear: z
    .number({ invalid_type_error: "سال ساخت فیلم الزامی است" })
    .min(1895, { message: `سال ساخت باید بین ۱۸۹۵ تا ${d.getFullYear()} باشد` })
    .max(d.getFullYear(), {
      message: `سال ساخت باید بین ۱۸۹۵ تا ${d.getFullYear()} باشد`,
    }),

  description: z
    .string()
    .nonempty({ message: "توضیحات الزامی است" })
    .min(8, { message: "توضیحات باید حداقل هشت حرفی باشد" }),
});

// zod
type FormData = z.infer<typeof schema>;

const MovieForm = () => {
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    // formState: { errors, isValid },
  } =
    // zodResolver
    useForm<FormData>({ resolver: zodResolver(schema) });

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
                // React Hook Form with zod
                {...register("filmName")}
                type="text"
                placeholder="نام فیلم را بنویسید"
                className="input input-bordered border-gray-400 text-[#C6C6C6] focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] placeholder:text-[#C6C6C6] placeholder:text-xs"
              />
              {/* React Hook Form with zod */}
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
                // React Hook Form
                {...register("director")}
                type="text"
                placeholder="نام کارگردان را وارد کنید"
                className="input input-bordered focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
              />
              {/* React Hook Form with zod */}
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
                // React Hook Form
                {...register("genre")}
                className="select select-bordered bg-[#515050] focus:outline-0 focus:border-yellow-500 text-xs text-[#C6C6C6] border-gray-400"
              >
                <option value={""}>یک ژانر انتخاب کنید</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              {/* React Hook Form with zod */}
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
                // React Hook Form
                {...register("productionYear", { valueAsNumber: true })}
                type="number"
                placeholder="سال ساخت فیلم را وارد کنید"
                className="appearance-none input input-bordered focus:outline-0 focus:border-yellow-500 w-full max-w-xs bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
              />
              {/* React Hook Form with zod */}
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
                // React Hook Form
                {...register("description")}
                className="textarea textarea-bordered focus:border-warning focus:outline-none h-24 bg-[#515050] text-[#C6C6C6] border-gray-400 placeholder:text-[#C6C6C6] placeholder:text-xs"
                placeholder="توضیحات درباره فیلم"
              ></textarea>
              {/* React Hook Form with zod */}
              {errors.description && (
                <span className="text-red-500 pt-2">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="flex self-end gap-x-4">
              <button
                // disabled={!isValid}
                type="submit"
                className="btn btn-warning py-0 px-12 border-0 bg-[#F9C90B] text-[#79704B] border-gray-400"
              >
                ذخیره
              </button>
              <button className="btn btn-outline py-0 px-12 text-[#C6C6C6] border-gray-400">
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
