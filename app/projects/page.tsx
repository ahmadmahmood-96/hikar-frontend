import Projects from "./Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ahmad's Portfolio",
};

const App = () => {
  return <Projects />;
};

export default App;
