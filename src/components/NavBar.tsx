import { motion } from "framer-motion";
import { useState } from "react";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};
const navLinks = [
  { name: "Accueil", href: "/", id: 1 },
  { name: "Blog", href: "/blog", id: 2 },
  { name: "Contact", href: "/contact", id: 3 },
  { name: "Newsletter", href: "/register", id: 4 },
];

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        className="hover:underline hover:text-primary"
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
      >
        {name}
      </motion.a>
    ))}
  </div>
);

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="relative mx-8 mb-14 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        className="flex gap-12"
      >
        <a href="/">
          <img
            src="/logo.jpg"
            alt="NordiSaga Logo"
            width="50"
            height="50"
            className="rounded-full hover:animate-pulse"
          />
        </a>
      </motion.div>

      {/* Title */}
      <h1 className="hidden md:flex md:text-xl md:font-bold md:font-skranjiBold md:text-gray-100 hover:text-primary">
        <a href="/">NordiSaga.</a>
      </h1>

      {/* Nav Items animating in  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0 z-40 flex h-screen
          w-full flex-col items-center justify-center gap-24 bg-darkBg text-2xl"
        >
          <NavLinks
            className="flex flex-col gap-24 text-lg font-skranjiRegular text-gray-200"
            isMobile={true}
          />
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg   "
      >
        <NavLinks
          className="flex gap-12 font-skranjiRegular text-gray-200"
          isMobile={false}
        />
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className="line-1 block h-0.5 w-8 bg-gray-100"
        ></motion.span>

        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className="line-2 block h-0.5 w-6 bg-gray-400"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 24,
          }}
          className="line-3 block h-0.5 w-4 bg-gray-100"
        ></motion.span>
      </motion.div>
    </nav>
  );
}
