import { useListStore } from "../context/ListStore";
import MovieItem from "./MovieItem";
import genres from "./genres";
import titlesList from "./titlesList";

const MovieList = () => {
  const {
    state,
    dispatch,
    searchInput,
    setSearchInput,
    filterInput,
    setFilterInput,
  } = useListStore();
  return (
    <div className="bg-[#595959] p-16 h-full">
      <div className="flex justify-between items-center pb-20">
        <div>
          <label className="label justify-normal gap-x-2">
            <span className="w-2 h-6 rounded-sm bg-yellow-400"></span>
            <span className="label-text text-xl text-white font-bold">
              لیست فیلم
            </span>
          </label>
        </div>
        <div className="form-control w-full max-w-xs flex-row justify-center">
          <label className="label justify-normal gap-x-2">
            <span className="w-2 h-5 rounded-sm bg-yellow-400"></span>
            <span className="label-text text-white font-bold">
              جستجو بر اساس ژانر فیلم
            </span>
          </label>
          <select
            onChange={(e) => setFilterInput(e.target.value)}
            className="select select-bordered w-[59%] bg-[#515050] focus:outline-0 focus:border-yellow-500 text-xs text-white border-gray-400"
          >
            <option value="یک ژانر انتخاب کنید">یک ژانر انتخاب کنید</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs flex-row justify-center gap-x-4">
          <label className="label justify-normal gap-x-2">
            <span className="w-2 h-5 rounded-sm bg-yellow-400"></span>
            <span className="label-text text-white font-bold">جستجوی فیلم</span>
          </label>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="نام فیلم مورد نظر خود را بنویسید"
            className="input input-bordered border-gray-400 w-[62%] text-white focus:outline-0 focus:border-yellow-500 max-w-xs bg-[#515050] placeholder:text-white placeholder:text-xs"
          />
        </div>
      </div>

      <div className="flex justify-around border-b-2 border-b-[#D9D9D9] pb-2 text-[#C6C6C6] text-lg">
        {titlesList.map((titleList) => (
          <span key={titleList}>{titleList}</span>
        ))}
      </div>
      {(filterInput === "" && searchInput === "") ||
      (filterInput === "یک ژانر انتخاب کنید" && searchInput === "")
        ? state.map((item, index) => (
            <MovieItem
              key={item.id}
              item={item}
              row={index}
              filmName={item.filmName}
              director={item.director}
              genre={item.genre}
              productionYear={item.productionYear}
              description={item.description}
            />
          ))
        : searchInput === ""
        ? state.map((item, index) => {
            if (item.genre === filterInput) {
              return (
                <MovieItem
                  key={item.id}
                  item={item}
                  row={index}
                  filmName={item.filmName}
                  director={item.director}
                  genre={item.genre}
                  productionYear={item.productionYear}
                  description={item.description}
                />
              );
            }
          })
        : searchInput !== ""
        ? state.map((item, index) => {
            if (
              item.filmName.includes(searchInput) ||
              item.director.includes(searchInput) ||
              item.genre.includes(searchInput) ||
              item.productionYear.includes(searchInput)
            ) {
              return (
                <MovieItem
                  key={item.id}
                  item={item}
                  row={index}
                  filmName={item.filmName}
                  director={item.director}
                  genre={item.genre}
                  productionYear={item.productionYear}
                  description={item.description}
                />
              );
            }
          })
        : console.log("mamad")}
    </div>
  );
};

export default MovieList;
