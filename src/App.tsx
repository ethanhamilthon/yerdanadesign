import "./i18n"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { BlogArticle } from "./pages/BlogArticle"

function App() {
  return (
    <div className="w-screen min-h-dvh pb-96 overflow-x-clip px-8 sm:px-24 md:px-36 flex flex-col gap-12 bg-[#0a0a0a] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[24px_24px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actuals/:slug" element={<BlogArticle />} />
      </Routes>
    </div>
  )
}

export default App
