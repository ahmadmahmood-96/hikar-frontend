import About from "./About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ahmad's Portfolio",
};

const App = () => {
  return (
    <>
      <About />
    </>
  );
};

export default App;
