import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = (props: P) => ({
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const WhatsAppIcon = (props: P) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.43 9.43 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.62l6.02-1.58a11.33 11.33 0 0 0 5.44 1.39h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.04-1.18-5.89-3.33-8.04" />
  </svg>
);

export const LinkedInIcon = (props: P) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const GlobeIcon = (props: P) => (
  <svg {...stroke(props)}>
    <circle cx="12" cy="12" r="9.25" />
    <path d="M2.75 12h18.5M12 2.75c2.5 2.6 3.75 5.68 3.75 9.25S14.5 18.65 12 21.25C9.5 18.65 8.25 15.57 8.25 12S9.5 5.35 12 2.75Z" />
  </svg>
);

export const MailIcon = (props: P) => (
  <svg {...stroke(props)}>
    <rect x="2.75" y="5" width="18.5" height="14" rx="2.25" />
    <path d="m3.5 6.5 8.5 6.25L20.5 6.5" />
  </svg>
);

export const ContactIcon = (props: P) => (
  <svg {...stroke(props)}>
    <rect x="3" y="3.5" width="18" height="17" rx="2.5" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 17.25c.9-1.9 2.75-3 5-3s4.1 1.1 5 3" />
  </svg>
);

export const ShareIcon = (props: P) => (
  <svg {...stroke(props)}>
    <path d="M12 3.5v11.75M7.75 7.5 12 3.25l4.25 4.25" />
    <path d="M8 10.5H6.5a1.75 1.75 0 0 0-1.75 1.75v6.5c0 .97.78 1.75 1.75 1.75h11c.97 0 1.75-.78 1.75-1.75v-6.5c0-.97-.78-1.75-1.75-1.75H16" />
  </svg>
);

export const QrIcon = (props: P) => (
  <svg {...stroke(props)}>
    <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1" />
    <rect x="14" y="3.5" width="6.5" height="6.5" rx="1" />
    <rect x="3.5" y="14" width="6.5" height="6.5" rx="1" />
    <path d="M14 14h2.5v2.5H14zM18 18h2.5v2.5H18zM18 14h2.5M14 18v2.5" />
  </svg>
);

export const DownloadIcon = (props: P) => (
  <svg {...stroke(props)}>
    <path d="M12 3.75v11.5M7.5 11 12 15.5 16.5 11M4.5 19.75h15" />
  </svg>
);

export const CloseIcon = (props: P) => (
  <svg {...stroke(props)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowIcon = (props: P) => (
  <svg {...stroke({ width: 18, height: 18, ...props })}>
    <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />
  </svg>
);

/* Category icons — discreet line drawings */
export const DropIcon = (props: P) => (
  <svg {...stroke(props)}>
    <path d="M12 3.25s6 6.4 6 10.75a6 6 0 0 1-12 0C6 9.65 12 3.25 12 3.25Z" />
    <path d="M9.25 14.5a2.75 2.75 0 0 0 2.75 2.75" />
  </svg>
);

export const FlaskIcon = (props: P) => (
  <svg {...stroke(props)}>
    <path d="M9.5 3.25h5M10.25 3.25v5.5L4.9 18.1A1.75 1.75 0 0 0 6.42 20.75h11.16a1.75 1.75 0 0 0 1.52-2.65l-5.35-9.35v-5.5" />
    <path d="M7.4 14.25h9.2" />
  </svg>
);

export const LeafIcon = (props: P) => (
  <svg {...stroke(props)}>
    <path d="M5 19c0-8.5 5.25-14 15-14 0 9.75-5.5 15-14 15" />
    <path d="M5 19.75C8 15.5 11 12.5 15 9.5" />
  </svg>
);

export const CapsuleIcon = (props: P) => (
  <svg {...stroke(props)}>
    <rect x="2.9" y="8.5" width="18.2" height="7" rx="3.5" transform="rotate(-45 12 12)" />
    <path d="m9.5 9.5 5 5" />
  </svg>
);
