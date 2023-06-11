import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Modal, Group, Button, useMantineTheme } from "@mantine/core";
import { GrClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedSideBar, { open: openSidebar, close: closeSideBar }] =
    useDisclosure(false);
  const theme = useMantineTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (isOpen && !event.target.closest(".sidebar")) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <nav
        onClick={handleOutsideClick}
        className="absolute top-0 left-0 right-0   mt-7 py-5 z-50  bg-transparent">
        <div className="max-w-[1650px] sticky  items-center m-auto top-0 left-0  flex justify-between  ">
          <div className=" flex justify-start items-center  w-1/5">
            <a className="navbar-brand " href="#">
              <img
                src={
                  "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/logo-2.png"
                }
                alt=""
                className=" w-[150px]"
              />
            </a>
          </div>

          <div className="hidden lg:flex  justify-between gap-44 items-center  w-2/5">
            <ul className="w-[90%] navbar-nav me-auto  mb-lg-0 flex justify-between ">
              <li className="nav-item flex justify-center underline-on-hover hover:text-[--color-primary] ">
                <a
                  className="nav-link NavComponents active "
                  aria-current="page"
                  href="#">
                  Home
                </a>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <a className="nav-link NavComponents" href="#">
                  About
                </a>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <a className="nav-link NavComponents" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <a className="nav-link NavComponents" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <a className="nav-link NavComponents" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <a className="nav-link NavComponents" href="#">
                  Shops
                </a>
              </li>
            </ul>
          </div>
          <div className=" flex items-center justify-end px-5 w-3/5 lg:w-1/5 lg:gap-2 md:gap-2 gap-3 ">
            <div
              onClick={open}
              className="text-[--color-primary] lg:w-[48px] lg:h-[45.4px] md:px-4 md:py-4 px-3  py-[7px]   rounded bg-white hover:bg-[--color-heading] searchHover shadow flex justify-center items-center flex-col"
              type="button">
              <CiSearch className="search text-black lineheightNavIcon  IconSize text-[--color-primary]" />
            </div>
            <div className=" hidden md:block lg:block">
              <button className="rounded px-3 lg:px-8 lineheightNavBtn text-white flex justify-center items-center  bg-[--color-primary] hover:bg-[--color-dark]">
                <p className=" lg:NavComponents NavRegister NavRegister">
                  Login / Register
                </p>
              </button>
            </div>
            <button
              onClick={openSidebar}
              className="lg:hidden  md:px-4 md:py-4 px-3  py-2 rounded  bg-white text-[--color-black] shadow"
              type="button">
              <GiHamburgerMenu className=" text-[--color-primary]" />
            </button>
            <button
              className="lg:hidden  md:hidden px-3  py-2 rounded  bg-white text-[--color-black] shadow"
              type="button">
              <BiUser className=" text-[--color-primary]" />
            </button>
          </div>
        </div>
      </nav>

      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="60%"
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
        overlayProps={{
          color: "#231F41",
          opacity: 0.55,
        }}
        centered>
        <div
          onClick={close}
          className=" bg-slate-50 p-3 rounded-[50%] absolute top-[31px] right-[31px]">
          <GrClose />
        </div>
        <form className="    flex justify-around  items-center bg-transparent">
          <input
            type="text "
            className=" w-[90%] py-2 outline-none text-lg"
            placeholder=" Search Here..."
          />
          <CiSearch />
        </form>
      </Modal>

      <Drawer
        opened={openedSideBar}
        onClose={closeSideBar}
        withCloseButton={false}>
        <ul className=" me-auto flex flex-col gap-10  mb-lg-0  ">
          <li className=" justify-between flex items-center">
            <a className="navbar-brand " href="#">
              <img
                src={
                  "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/logo-2.png"
                }
                alt=""
                className=" w-[150px]"
              />
            </a>
            <div
              onClick={closeSideBar}
              className=" bg-slate-50 p-3 rounded-[50%] shadow">
              <GrClose />
            </div>
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <a
              className="nav-link NavComponents active "
              aria-current="page"
              href="#">
              Home
            </a>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <a
              className="nav-link NavComponents active "
              aria-current="page"
              href="#">
              About
            </a>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <a
              className="nav-link NavComponents active "
              aria-current="page"
              href="#">
              Courses
            </a>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <a
              className="nav-link NavComponents active "
              aria-current="page"
              href="#">
              Pages
            </a>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <a
              className="nav-link NavComponents active "
              aria-current="page"
              href="#">
              Blogs
            </a>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <a
              className="nav-link NavComponents active "
              aria-current="page"
              href="#">
              Shops
            </a>
            <AiOutlinePlus />
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
