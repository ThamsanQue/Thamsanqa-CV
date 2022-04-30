import {
  GitHub,
  Instagram,
  LinkedIn,
  PersonPinCircle,
} from "@material-ui/icons";
import React from "react";
import "../Styles/sidebar.css";
import TJN from "../Assets/ThamsanqaJ.JPG";
import { Avatar } from "@material-ui/core";
import { motion } from "framer-motion";

function Sidebar() {
  const handleEmail = () => {
    window.open("mailto:thamsanqa.dev@gmail.com");
  };

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: "0",
      transition: {
        type: "spring",
        delay: 0.5,
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      className="sidebar__"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <Avatar className="sidebar__profileImage" src={TJN} alt="profileImage" />
      <div className="sidebar__profileName">
        Thamsanqa <span>J</span>
      </div>
      <div className="sidebar__professionTitle sidebar__option">
        Web & Mobile Developer
      </div>
      <figure className="sidebar__socialIcons my-2">
        <a
          href="https://www.linkedin.com/in/thamsanqa-j-31171b1a5/"
          target="_blank"
        >
          <LinkedIn className="mr-3" />
        </a>
        <a href="https://www.instagram.com/dream__dev/" target="_blank">
          <Instagram />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__option sidebar__github">
          <a href="https://github.com/ThamsanQue" target="_blank">
            <GitHub className="mr-3" />
            GitHub
          </a>
        </div>
        <div className="sidebar__location">
          <PersonPinCircle className="mr-3" />
          Johannesburg, South Africa
        </div>
        <div className="sidebar__option">thamsanqa.dev@gmail.com</div>
        <div className="sidebar__option">+27 62 570 6693</div>
      </div>
      <div className="sidebar__option sidebar__email" onClick={handleEmail}>
        Email me
      </div>
    </motion.div>
  );
}

export default Sidebar;
