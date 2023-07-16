import MovieForm from "./components/MovieForm(final)";
import MovieList from "./components/MovieList";
import ListProvider from "./context/ListStore";

const App = () => {
  return (
    <>
      <ListProvider>
        <nav className="h-24 bg-yellow-300 opacity-90"></nav>
        <MovieForm />
        <MovieList />
      </ListProvider>
    </>
  );
};

export default App;
