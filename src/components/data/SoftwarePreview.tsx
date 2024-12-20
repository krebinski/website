import Link from "next/link";
import type { FunctionComponent } from "react";
import React from "react";

export interface SoftwarePreviewProps {
  id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description?: string;
  download?: boolean;
}

const SoftwarePreview = ({
  id,
  name,
  description,
  download,
}: SoftwarePreviewProps) => (
  <Link href={download ? `/downloads/${id}` : `/software/${id}`}>
    <article className="rounded-xl transition-all h-full p-4 md:p-8 hover:(shadow-lg bg-green-200 dark:bg-gray-800)">
      <div className="flex flex-row items-center gap-4">
        <h3 className="font-medium flex-1">{name}</h3>
      </div>

      {description && (
        <p className="text-gray-800 dark:text-gray-200 mt-4">{description}</p>
      )}
    </article>
  </Link>
);
export default SoftwarePreview;