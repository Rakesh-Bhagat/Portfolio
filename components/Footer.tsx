import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="md:max-w-2xl mt-10 flex flex-col sm:flex-row gap-5 items-center sm:items-start justify-between px-2 py-5 border-t border-neutral-300">
      <div className="text-sm">&copy; 2025 bhagat.dev</div>
      <div className="flex gap-4 sm:justify-evenly">
        <Link target="_blank" href={"https://www.linkedin.com/in/irakesh-bhagat/"}>
          <IconBrandLinkedin />
        </Link>
        <Link target="_blank" href={"https://github.com/Rakesh-Bhagat"}>
          <IconBrandGithub />
        </Link>
        <Link target="_blank" href={"https://x.com/irakesh_bhagat"}>
          <IconBrandX />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
