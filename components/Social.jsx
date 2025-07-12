import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    {
      icon: <FaGithub />,
      path: "",
    },
    {
      icon: <FaLinkedin />,
      path: "",
    },

    {
      icon: <FaYoutube />,
      path: "",
    },

    {
      icon: <FaTwitter />,
      path: "",
    },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link className={iconStyles} key={index} href={item.path}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
