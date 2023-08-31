import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Favorites from "./pages/Favorites/Favorites";
import ContextReducer from "./contexts";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextReducer>
          <Header />
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/movieDetails/:movieId"} element={<MovieDetails />} />
            <Route path={"/signup"} element={<SignUp />} />
            <Route path={"/signin"} element={<SignIn />} />
            <Route path={"/myFavorites"} element={<Favorites />} />
          </Routes>
          <Footer />
        </ContextReducer>
      </BrowserRouter>
    </>
  )
}

export default App
