import type { SWRInfiniteResponse } from "swr/infinite"
import useSWRInfinite from "swr"

import { swrNoAutoUpdateSettings } from "./api"

export interface Contribuitor {
    login: string;
    id: number;
    avatar_url: string;
    contributions: number;
}

const CONTRIBUITORS_BASE_URL = 
    "https://api.github.com/repos/krebinski/mafaka/contribuitors?per_page=100";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getURL = (pageIndex: number, previousPageData: any): string | null => {
    if (previousPageData && previousPageData.length < 100) return null;
    return `${CONTRIBUITORS_BASE_URL}&page=${pageIndex + 1}`;
};

export const useGitHubContribuitors = (): SWRInfiniteResponse<Contribuitor[]> => useSWRInfinite(getURL, fetcher, swrNoAutoUpdateSettings);