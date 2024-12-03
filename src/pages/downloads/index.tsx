import { t } from "i18next";
import type { NextPage } from "next";

import LeavesIcon from "@/assets/brand/mafaka.svg";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import SEO from "@/components/util/SEO";

const Downloads: NextPage = () => {
  return (
    <>
      <SEO
        title={t("title.downloads.index")}
        description="Encontre downloads para nosso software – incluindo Mafaka."
        keywords={["mafakamc", "minecraft", "vanilla", "mafaka", "downloads"]}
      />
      <header className="max-w-4xl flex flex-col items-center mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-26) gap-2">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          {t("downloads.index.title")}
        </h1>
        <p className="text-xl text-center mb-6">
          {t("downloads.index.description")}
        </p>
        <div className="grid md:grid-cols-2 gap-2 px-2 xl:gap-4">
          <SoftwarePreview
            id="mafaka"
            name="Mafaka"
            icon={LeavesIcon}
            description={t("downloads.index.softwares.leaves.description")}
            download
          />
        </div>
      </header>
    </>
  );
};

export default Downloads;