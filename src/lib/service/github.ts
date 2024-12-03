import type { SWRInfiniteResponse } from "swr/infinite";
import useSWRInfinite from "swr/infinite";

import { swrNoAutoUpdateSettings } from "./api";

export interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  contributions: number;
}

const CONTRIBUTORS_BASE_URL =
  "https://api.github.com/repos/krebinski/website/contributors?per_page=100";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Função que determina a URL para a próxima página
const getURL = (pageIndex: number, previousPageData: any): string | null => {
  if (previousPageData && previousPageData.length < 100) return null;
  return `${CONTRIBUTORS_BASE_URL}&page=${pageIndex + 1}`;
};

// Custom hook que retorna a resposta da requisição com paginamento infinito
export const useGitHubContributors = (): SWRInfiniteResponse<Contributor[], any> =>
  useSWRInfinite(getURL, fetcher, swrNoAutoUpdateSettings);
