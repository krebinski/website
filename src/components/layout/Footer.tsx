import clsx from "clsx";
import { t } from "i18next";
import Link from "next/link";

import Logo from "@/assets/brand/mafaka.svg";
import classes from "@/styles/components/layout/Footer.module.css";

const Footer = () => (
  <footer className={clsx("bg-background-dark-80 py-12 mt-8", classes.footer)}>
    <div className="max-w-7xl m-auto px-4">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm text-white">
        <div>
          <span className="font-semibold">
            {t("components.layout.Footer.getting_started.title")}
          </span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/downloads">
                {t("components.layout.Footer.getting_started.downloads")}
              </Link>
            </li>
            <li>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
            </li>
            <li>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">
            {t("components.layout.Footer.community.title")}
          </span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/community">
                {t("components.layout.Footer.community.our_community")}
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/krebinski"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/5hgtU72w33"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">MafakaMC</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/team">
                {t("components.layout.Footer.MafakaMC.our_team")}
              </Link>
            </li>
            <li>
              <Link href="/contribute">
                {t("components.layout.Footer.MafakaMC.contribute")}
              </Link>
            </li>
            <li>
              <Link href="/sponsor">
                {t("components.layout.Footer.MafakaMC.sponsor")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">
            {t("components.layout.Footer.terms.title")}
          </span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="https://discord.com/channels/1028563196040200272/1028563196782596118/1047082992666955867">
                {t("components.layout.Footer.terms.community_guidelines")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 border-t border-gray-600/50 mt-8 pt-10">
        <Logo className="h-12 cursor-pointer" alt="LeavesMC" />
        <div className="flex-1" />
        <span className="text-gray-300 text-sm" style={{ textAlign: "right" }}>
          © {new Date().getFullYear()}{" "}
          {t("components.layout.Footer.copyright")}
          <br />
          {t("translator")}
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;