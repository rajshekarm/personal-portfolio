import "./App.css";
import SplashScreen from "./components/SplashScreen";
import { ThemeProvider } from "./components/ThemeProvider";
import { useState } from "react";
import { Main } from "./pages/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutFull } from "./pages/AboutFull";
import BlogsHome from "./pages/BlogsHome";
import CaseStudyList from "./pages/CaseStudyList";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ArticleList from "./pages/ArticleList";
import ArticleDetail from "./pages/ArticleDetail";

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

                <Route path="/blogs" element={<BlogsHome />} />

                <Route path="/blogs/case-studies" element={<CaseStudyList />} />
                <Route path="/blogs/case-studies/:slug" element={<CaseStudyDetail />} />

                <Route path="/blogs/articles" element={<ArticleList />} />
                <Route path="/blogs/articles/:slug" element={<ArticleDetail />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
