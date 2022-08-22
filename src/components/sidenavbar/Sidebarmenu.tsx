import React from "react";
import { FcAbout, FcBookmark } from "react-icons/fc";
import { BsHouseDoor } from "react-icons/bs";
import {
  FiAlignJustify,
  FiArrowDown,
  FiArrowUp,
  FiLogOut,
} from "react-icons/fi";

const Sidebarmenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <BsHouseDoor />,
  },
  {
    title: "About",
    path: "/about",
    icon: <FcAbout />,
  },
  {
    title: "list",
    path: "/list",
    icon: <FiAlignJustify />,
    IconOpened: <FiArrowDown />,
    IconClosed: <FiArrowUp />,

    subNav: [
      {
        title: "nested1",
        path: "/nest1",
      },
      {
        title: "nested2",
        path: "/nest2",
      },
      {
        title: "nested3",
        path: "/nest3",
      },
      {
        title: "nested4",
        path: "/nest4",

        subNavNest: [
          {
            title: "nested41",
            path: "/nest41",
          },
          {
            title: "nested42",
            path: "/nest42",
          },
          {
            title: "nested43",
            path: "/nest43",
          },
          {
            title: "nested44",
            path: "/nest44",
          },
        ],
      },
    ],
  },
  {
    title: "Notification",
    path: "/notification",
    icon: <FcBookmark />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <FiLogOut />,
  },
];

export default Sidebarmenu;
