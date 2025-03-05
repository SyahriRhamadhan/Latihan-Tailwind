import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`${scrollActive} navbar transition-all fixed w-full`}>
      <div className="container mx-auto px-4 ">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="text-xl sm:text-2xl font-bold">Ngondf</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="text-3xl md:hidden bllock ri-home-line"></i>
              <a href="#" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="text-3xl md:hidden bllock ri-mail-send-fill"></i>
              <a href="#" className="font-medium opacity-75">
                Tentang Kami
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="text-3xl md:hidden bllock ri-settings-3-line"></i>
              <a href="#" className="font-medium opacity-75">
                Layanan
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="text-3xl md:hidden bllock ri-shake-hands-line"></i>
              <a href="#" className="font-medium opacity-75">
                Proyek
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            <a
              href="#"
              className=" text-white font-bold transition-all hover:bg-sky-500 bg-sky-400 px-5 py-2 rounded-full"
            >
              Social Media
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
