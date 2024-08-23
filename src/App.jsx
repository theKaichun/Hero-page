import React from "react";
import Hero from "./components/Hero";
import { UpdateFollower } from "react-mouse-follower";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BPage from "./b/page";
import TPage from "./T/page";
import VPage from "./V/page";
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <BrowserRouter>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 10,
            followSpeed: 1.5,
          }}
        >
          <Routes>
            <Route path="/components/Hero" element={<Hero />} />
            <Route path="/b/page" element={<BPage />} />
            <Route path="/T/page" element={<TPage />} />
            <Route path="/V/page" element={<VPage />} />
          </Routes>
        </UpdateFollower>
      </BrowserRouter>
    </main>
  );
};

export default App;
