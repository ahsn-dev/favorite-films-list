import {
  createContext,
  useReducer,
  useContext,
  useState,
  Dispatch,
  ReactNode,
} from "react";

type actions = {
  type: "ADD_TO_LIST" | "EDIT_LIST" | "REMOVE_FROM_LIST" | "IS_EDIT_LIST";
  payload: any;
};
type ListContext = {
  state: any[];
  dispatch: Dispatch<actions>;
};

const listContext = createContext<ListContext | []>([]);

export const useListStore = () => {
  return useContext(listContext);
};

const ListProvider = ({ children }: { children: ReactNode }) => {
  const [editItem, setEditItem] = useState({});
  const [onEdit, setOnEdit] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const listReducer = (state: any[], action: actions) => {
    switch (action.type) {
      case "ADD_TO_LIST":
        return [...state, action.payload];

      case "EDIT_LIST":
        setEditItem({
          filmName: action.payload.filmName,
          director: action.payload.director,
          genre: action.payload.genre,
          productionYear: action.payload.productionYear,
          description: action.payload.description,
          id: action.payload.id,
        });
        return state;

      case "IS_EDIT_LIST":
        const update = state.map((item) => {
          if (item.id === editItem.id) {
            item = { ...action.payload, id: editItem.id };
            return item;
          }
          return item;
        });

        return update;

      case "REMOVE_FROM_LIST":
        return state.filter((item) => item.id !== action.payload.id);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(listReducer, []);
  return (
    <listContext.Provider
      value={{
        state,
        dispatch,
        editItem,
        setEditItem,
        onEdit,
        setOnEdit,
        searchInput,
        setSearchInput,
        filterInput,
        setFilterInput,
      }}
    >
      {children}
    </listContext.Provider>
  );
};

export default ListProvider;
