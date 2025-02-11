import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import { projectProps, siteProps } from "./props";

export default function App() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="sticky top-0 left-0 w-full bg-white">
        <Header siteProps={siteProps} />
      </div>
      <div className="size-full">
        <Home siteProps={siteProps} />
      </div>
      <div className="min-h-full">
        <About />
      </div>
      <div className="min-h-full">
        <Projects projects={projectProps} />
      </div>
      <Footer siteProps={siteProps} />
    </div >
  )
}