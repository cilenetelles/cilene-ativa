import type { ReactNode } from "react";

type Props = { title?: string; id?: string; children: ReactNode; className?: string };

export default function Section({ title, id, children, className = "" }: Props) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section aria-labelledby={title ? headingId : undefined} className={`px-6 py-7 ${className}`}>
      {title ? (
        <h2 id={headingId} className="mb-4 font-heading text-lg font-semibold tracking-tight text-deep">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
