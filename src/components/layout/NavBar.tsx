import clsx from "clsx";
import { t } from "i18next";
import type { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Logo from "@/assets/brand/mafaka.svg";
import DiscordIcon from "@/assets/icons/fontawesome/discord-brands.svg";
import GitHubIcon from "@/assets/icons/fontawesome/github-brands.svg";
import MenuIcon from "@/assets/icons/heroicons/menu.svg";
import IconButton from "@/components/input/IconButton";
import NavDropDown from "@/components/layout/NavDropDown";
import NavDropDownLink from "@/components/layout/NavDropDownLink";
import NavLink from "@/components/layout/NavLink";
import type { PageSoftwareProps } from "@/lib/util/types";
import i18n from "i18n";

export interface NavBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: NextComponentType<NextPageContext, any, any>;
}

const NavBar = ({ component }: NavBarProps) => {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const softwareProps: PageSoftwareProps | undefined = (component as any)[
    "softwareProps"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScroll]);

  useEffect(() => {
    setShowMenu(false);
  }, [router.route]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-shadow",
        scroll && "bg-background-light-10 dark:bg-background-dark-90 shadow-xl",
      )}
    >
      <div className="max-w-7xl flex flex-row items-center mx-auto px-4 py-2 gap-2">
        <button
          title={t("components.layout.NavBar.toggle")}
          className="leading-0 mr-2 md:hidden"
          onClick={() => setShowMenu((show) => !show)}
        >
          <MenuIcon className="w-6 h-6 fill-gray-500" />
        </button>
        <Link href="/" className="leading-0" tabIndex={-1} aria-hidden={true}>
          <Logo className="h-8 cursor-pointer" alt="MafakaMC" />
        </Link>
        <div
          className={clsx(
            "absolute top-full left-0 right-0 flex flex-col bg-background-light-10 dark:bg-background-dark-90 gap-4 p-4 shadow-xl w-full md:(block relative w-auto shadow-none bg-transparent p-0)",
            !showMenu && "hidden",
          )}
        >
          <NavDropDown label={t("components.layout.NavBar.software")}>
            <NavDropDownLink href="/software/mafaka">Mafaka</NavDropDownLink>
          </NavDropDown>
          <NavLink href="/team">{t("components.layout.NavBar.team")}</NavLink>
          <NavLink href="/contribute">
            {t("components.layout.NavBar.contribute")}
          </NavLink>
          <div className="md:hidden" />
          <NavDropDown label={t("Language")} className="md:hidden">
            {Array.from(i18n.languages)
              .filter((language) => language !== "pt")
              .map((language) => (
                <NavDropDownLink
                  href=""
                  key={language}
                  onClick={() => {
                    i18n.changeLanguage(language);
                  }}
                >
                  {i18n.getFixedT(language)("name")}
                </NavDropDownLink>
              ))}
          </NavDropDown>
        </div>

        <div className="flex-grow" />
        <NavDropDown label={t("Language")} className="invisible md:visible">
          {Array.from(i18n.languages)
            .filter((language) => language !== "pt")
            .map((language) => (
              <NavDropDownLink
                href=""
                key={language}
                onClick={() => {
                  i18n.changeLanguage(language);
                }}
              >
                {i18n.getFixedT(language)("name")}
              </NavDropDownLink>
            ))}
        </NavDropDown>
        <IconButton
          icon={DiscordIcon}
          label="Discord"
          href="https://discord.gg/"
          external
        />
        <IconButton
          icon={GitHubIcon}
          label="GitHub"
          href={softwareProps?.github || "https://github.com/krebinski"}
          external
        />
      </div>
    </nav>
  );
};

export default NavBar;