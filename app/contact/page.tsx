import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ahmad's Portfolio",
};

const App = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default App;
