import React from "react";
import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32 ">
          <div className="box">
            <h1 className="lg:text-5x/tight text-3xl font-medium mb-7">
              Belajar Membuat Website Dengan{" "}
              <span className="font-bold text-sky-400 underline">
                tailwind CSS
              </span>
            </h1>
            <p className="text-base/8 mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              amet sed. Neque beatae omnis praesentium alias unde vero earum
              ipsam?
            </p>
            <a
              href=""
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white  shadow rounded-full"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero image"
              className="md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>
        </div>

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="about image" className="lg:w-[500px] w-[400px] md:m-o mx-auto" />
          </div>

          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5x/tight text-3xl font-medium mb-7">
              Belajar Membuat Website Dengan{" "}
              <span className="font-bold text-sky-400 underline">
                tailwind CSS
              </span>
            </h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              amet sed. Neque beatae omnis praesentium alias unde vero earum
              ipsam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
