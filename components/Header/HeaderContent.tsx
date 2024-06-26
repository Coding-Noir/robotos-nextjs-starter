"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import { MAIN_MENU_LINKS } from "@/constants";
import useScrollDirection from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import useCloseMobileMenuOnResize from "@/hooks/useCloseMobileMenuOnResize";
import useBodyOverflow from "@/hooks/useBodyOverflow";

const NavlinkStyles = "";

export default function HeaderContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === "down") {
      setHiddenMenu(true);
    } else {
      setHiddenMenu(false);
    }
  }, [scrollDirection]);

  // handle body overflow when menu is open
  useBodyOverflow(menuOpen);

  // Close mobile menu on window resize
  useCloseMobileMenuOnResize(() => setMenuOpen(false));

  // Handle mobile menu
  function handleMobileMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: hiddenMenu ? "-100%" : "0%" }}
      transition={{ duration: 0.1 }}
      className={cn("")}
    >
      <Container className="">
        {/* Logo */}
        <div className="">
          <Image
            src="/images/logo-icon.png"
            height={28}
            width={28}
            alt="Logo"
          />

          <Link
            href="/"
            className={`${NavlinkStyles}`}
            onClick={menuOpen ? handleMobileMenu : undefined}
          >
            Robotos
          </Link>
        </div>

        {/* Menu */}
        <nav className="">
          <ul className="">
            {MAIN_MENU_LINKS.map(({ label, url, cta }) => (
              <li key={`menu-name-${label}`}>
                <NavLink label={label} url={url || "#"} cta={cta} />
              </li>
            ))}
          </ul>

          <ul className={cn("", menuOpen ? "" : "")}>
            {MAIN_MENU_LINKS.map(({ label, url, cta }) => (
              <li key={`mobile-menu-name-${label}`} className="">
                <NavLink
                  label={label}
                  url={url || "#"}
                  cta={cta}
                  className=""
                  handleMobileMenu={handleMobileMenu}
                />
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={cn("", menuOpen ? "" : "")}
            onClick={handleMobileMenu}
          >
            <span className="">Open Menu</span>
            <span className={cn(menuOpen ? "" : "")} />
            <span className="" />
            <span className={cn(menuOpen ? "" : "")} />
          </button>
        </nav>
      </Container>
    </motion.div>
  );
}

const NavLink = ({
  label,
  url,
  cta,
  className,
  handleMobileMenu,
}: {
  label: string;
  url?: string;
  cta?: boolean;
  className?: string;
  handleMobileMenu?: () => void;
}) => {
  return (
    <Link
      href={url || "#"}
      className={cn(NavlinkStyles, cta && "", className)}
      onClick={handleMobileMenu}
    >
      {label}
    </Link>
  );
};
