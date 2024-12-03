import { t } from "i18next";
import type { ReactElement } from "react";

import LeavesIcon from "@/assets/brand/mafaka.svg";
import SoftwareDownload from "@/components/layout/SoftwareDownload";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const LeavesDownloads = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title={t("title.downloads.leaves")}
        description="Baixe Mafaka, nosso software de servidor Minecraft que oferece desempenho e estabilidade incomparáveis."
        keywords={[
          "mafakamc",
          "minecraft",
          "vanilla",
          "leaves",
          "downloads",
          "jar",
        ]}
      />
      <SoftwareDownload
        id="mafaka"
        project={project}
        icon={LeavesIcon}
        description={t("downloads.leaves.description")}
        experimentalWarning={t("downloads.leaves.experimentalWarning")}
      />
    </>
  );
};

export default LeavesDownloads;

export const getStaticProps = getProjectProps("Leaves");