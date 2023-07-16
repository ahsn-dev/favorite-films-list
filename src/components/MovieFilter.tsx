interface Props {
  onSelectGenre: (genre: string) => void;
}

const MovieFilter = ({ onSelectGenre }: Props) => {
  return (
    <select onChange={(event) => onSelectGenre(event.target.value)}>
      <option value=" " disabled>
        یک ژانر انتخاب کنید
      </option>
    </select>
  );
};

export default MovieFilter;
