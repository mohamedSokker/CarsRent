import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home/View"));
const ShowCars = lazy(() => import("./Pages/ShowCars/View"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-[100vw] h-[100vh] flex flex-col gap-2 justify-center items-center">
          Loading
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShowCars" element={<ShowCars />} />
      </Routes>
    </Suspense>
  );
}

export default App;
