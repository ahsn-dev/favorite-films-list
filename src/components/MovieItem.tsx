import { useListStore } from "../context/ListStore";

interface Props {
  row: number;
  item: object;
  filmName: string;
  director: string;
  genre: string;
  productionYear: number;
  description: string;
}

const MovieItem = ({
  item,
  row,
  filmName,
  director,
  genre,
  productionYear,
}: Props) => {
  const { state, dispatch, editItem, setEditItem, onEdit, setOnEdit } =
    useListStore();
  return (
    <div className="flex justify-around items-center pb-2 text-[#C6C6C6] text-lg py-8">
      <span>{row + 1}</span>
      <span>{filmName}</span>
      <span>{director}</span>
      <span>{genre}</span>
      <span>{productionYear}</span>
      <span>
        <button className="btn btn-outline btn-info py-0 px-2">توضیحات</button>
      </span>
      <span>
        <button
          onClick={() => {
            dispatch({ type: "EDIT_LIST", payload: item });
            setOnEdit(true);
          }}
          className="btn btn-outline btn-success gap-x-2 py-0 px-2"
        >
          ویرایش
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586	c-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"></path>
            <path d="M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5	h6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"></path>
          </svg>
        </button>
      </span>
      <span>
        <button
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_LIST", payload: item });
          }}
          className="btn btn-outline btn-error gap-x-2 py-0 px-2"
        >
          حذف
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </span>
    </div>
  );
};

export default MovieItem;
