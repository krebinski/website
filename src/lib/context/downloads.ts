import type { GetStaticProps } from "next";
import { createContext } from "react";

import type { Build } from "@/lib/service/types";
import { getProject, getVersionBuilds } from "@/lib/service/v2";

export interface DownloadsContextProps {
  projectId: string;
  project?: ProjectDescriptor;
  builds?: Build[];
  version: string;
  stable: boolean;
}

export interface ProjectDescriptor {
  name: string;
  latestStableVersion: string;
  latestExperimentalVersion: string | null;
  latestVersionGroup: string;
}

export interface ProjectProps {
  project: ProjectDescriptor;
}

export const DownloadsContext = createContext<DownloadsContextProps>({
  projectId: "leaves",
  project: undefined,
  builds: undefined,
  version: "",
  stable: true,
});

const isVersionStable = async (
  project: string,
  version: string
): Promise<boolean> => {
  const { builds } = await getVersionBuilds(project, version);

  if (!builds || builds.length === 0) {
    return false;
  }

  return builds.some((build) => build.channel === "default");
};

export const getProjectProps = (id: string): GetStaticProps<ProjectProps> => {
  return async () => {
    try {
      const { project_name, versions = [], versions_groups = [] } = await getProject(id);

      if (versions.length === 0) {
        throw new Error(`No versions available for project ID: ${id}`);
      }

      if (versions_groups.length === 0) {
        throw new Error(`No version groups available for project ID: ${id}`);
      }

      // Determine the latest stable version
      let latestStableVersion = versions[versions.length - 1];
      for (let i = versions.length - 1; i >= 0; i--) {
        if (await isVersionStable(id, versions[i])) {
          latestStableVersion = versions[i];
          break;
        }
      }

      // Determine the latest experimental version
      const latestExperimentalVersion =
        latestStableVersion !== versions[versions.length - 1]
          ? versions[versions.length - 1]
          : null;

      const project: ProjectDescriptor = {
        name: project_name || "Unknown Project",
        latestStableVersion,
        latestExperimentalVersion,
        latestVersionGroup: versions_groups[versions_groups.length - 1],
      };

      return {
        props: {
          project,
        },
        revalidate: 600, // Revalidate every 10 minutes
      };
    } catch (error) {
      console.error("Error in getProjectProps:", error);

      return {
        props: {
          project: {
            name: "Unknown Project",
            latestStableVersion: "unknown",
            latestExperimentalVersion: null,
            latestVersionGroup: "unknown",
          },
        },
        revalidate: 600,
      };
    }
  };
};
