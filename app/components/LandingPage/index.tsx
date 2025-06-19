"use client";

import HomeBanner from "@/public/home-banner.jpg";
import Image from "next/image";
import Link from "next/link";
import DisplayPicture1 from "@/public/display-picture-1.png";
import { useAppSelector } from "@/redux/store";

export default function LandingPage() {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);

  const offers: string[] = [
    "Develop a Website along with its SEO with complete frontend and backend",
    "Worked with following ML Models; LSTM Model, Decision Tree Classifier, Simple Vector Classifier Model",
    "Worked with Hugging Face for developing a PDF to Quiz Generator module",
    "Experience with technologies like Cypress and Selenium for automation",
    "Developed a Mobile Application using React Native in Final Year Project",
    "Have experience with Data Science and web scraping",
    "Also have experience with Jira for Project Management, and also with Git",
  ];

  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[500px] w-full lg:place-items-start object-cover">
        <Image
          src={HomeBanner}
          alt="Home Banner"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-[2] opacity-85"></div>
        <div className="z-[3] flex flex-col items-center justify-center lg:items-start lg:mt-14 my-1 lg:justify-start h-full lg:w-[850px] xl:[800px] 2xl:[900px] px-8 lg:px-16">
          <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-left text-center font-semibold text-primaryText ">
            Hello
            <div className="my-4" />
            I&apos;m <span className="text-teal">Ahmad Mahmood</span>
          </h1>
          <p
            className={`text-primaryText lg:mt-8 mt-5 font-thin 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base lg:text-left text-center`}
          >
            A Software Engineer with interests in Full Stack Development using
            MERN Stack and Machine Learning{" "}
          </p>
          <Link href="/projects">
            <button className="bg-blue text-primaryText text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-3 rounded-md mt-4 hover:bg-[#2A76CC]">
              Explore my Projects
            </button>
          </Link>
        </div>
      </main>
      <section className="flex lg:flex-row flex-col justify-center xl:space-x-4 lg:space-x-4 space-y-4 items-center p-5 lg:m-10 m-5">
        <div className="flex items-center justify-center">
          <Image
            src={DisplayPicture1}
            alt="Display Image"
            className="xl:w-96 lg:w-96 w-60 object-fit p-2"
          />
        </div>
        <div className="lg:text-left text-center lg:w-[400px]">
          <h2 className="text-2xl font-bold">
            I am Ahmad Mahmood, A{" "}
            <span className="text-blue">Software Engineer</span>
          </h2>
          <p className="text-base">
            Recently graduated from{" "}
            <span
              className={`${
                theme ? "text-primary" : "text-white"
              } font-semibold`}
            >
              COMSATS University Islamabad, Islamabad Campus{" "}
            </span>
            with a CGPA of 3.36. Having strong interest in Full Stack
            Development using MERN Stack and have expertise in Mobile
            Application Development using React Native, Machine Learning, Data
            Science and Prompt Engineering, With eager to learn more and by
            doing hardwork, want to excel more in this field.
          </p>
        </div>
      </section>

      <section className="relative grid h-[calc(60vh-8rem)] min-h-[400px] w-full place-items-center object-cover">
        <div className="absolute inset-0 bg-[#0c2748] z-[2] "></div>
        <div className="z-[3] flex items-center text-center mx-4 text-primaryText">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Ahmad Mahmood, A Full Stack Developer
          </h1>
        </div>
      </section>
      <section className="mt-8 mb-28 flex flex-col items-center xl:mx-20 lg:mx-10 mx-5">
        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="text-teal font-bold text-3xl lg:text-5xl md:text-4xl my-4">
            About Me
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center max-w-[1520px] w-full gap-12  px-12">
          <div className="flex flex-col justify-start flex-1 gap-4">
            <h1 className="text-secondaryText font-bold text-2xl lg:text-4xl md:text-3xl mb-4 lg:mb-2">
              How may I be useful to you as a Software Engineer
            </h1>
            <ul className="custom-circle-list w-fit h-full flex flex-col justify-center gap-8 lg:gap-12">
              {offers.map((offer: string, index: number) => (
                <li
                  key={index}
                  className="lg:text-2xl md:text-xl text-lg font-medium"
                >
                  {offer}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="bg-blue w-fit text-primaryText text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-3 rounded-md mt-4 hover:bg-[#2A76CC]"
            >
              Read More About Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
