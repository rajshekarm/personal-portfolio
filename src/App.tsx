import "./App.css";
import SplashScreen from "./components/SplashScreen";
import { ThemeProvider } from "./components/ThemeProvider";
import { useState } from "react";
import { Main } from "./pages/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutFull } from "./pages/AboutFull";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider>
      <div className="bg-black text-white scroll-smooth min-h-screen">
        {showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
          <BrowserRouter basename="/personal-portfolio">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutFull />} />
              
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
