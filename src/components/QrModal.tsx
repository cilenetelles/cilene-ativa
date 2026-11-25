import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { SITE_URL } from "../config";
import type { Dict } from "../i18n";
import { CloseIcon, DownloadIcon } from "./Icons";

type Props = { open: boolean; onClose: () => void; t: Dict };

export default function QrModal({ open, onClose, t }: Props) {
  const [dataUrl, setDataUrl] = useState<string>("");
  const closeRef = useRef<HTMLButtonElement>(null);

  // Real, scannable QR Code generated from the public URL (error correction level M).
  useEffect(() => {
    if (!open || dataUrl) return;
    QRCode.toDataURL(SITE_URL, {
      errorCorrectionLevel: "M",
      margin: 2,
      width: 720,
      color: { dark: "#004D3D", light: "#FFFFFF" },
    })
      .then(setDataUrl)
      .catch(() => setDataUrl(""));
  }, [open, dataUrl]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-deep/55 p-5 backdrop-blur-[2px] animate-fade"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="qr-title"
        className="w-full max-w-[340px] rounded-3xl bg-white p-6 text-center shadow-2xl animate-rise"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <h2 id="qr-title" className="pr-4 text-left font-heading text-base font-semibold text-deep">
            {t.qrTitle}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="-mr-2 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-neutral hover:bg-light"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mx-auto mt-4 aspect-square w-full max-w-[260px] rounded-2xl border border-line p-2">
          {dataUrl ? (
            <img src={dataUrl} alt={`QR Code — ${SITE_URL}`} className="h-full w-full" />
          ) : (
            <div className="h-full w-full animate-pulse rounded-xl bg-light" />
          )}
        </div>

        <p className="mt-3 break-all text-xs text-neutral">{SITE_URL.replace(/^https:\/\//, "")}</p>

        <a
          href={dataUrl || undefined}
          download="cilene-telles-qr-code.png"
          aria-disabled={!dataUrl}
          className="mt-5 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-primary font-semibold text-white transition-colors hover:bg-dark"
        >
          <DownloadIcon width={20} height={20} />
          {t.downloadQr}
        </a>
      </div>
    </div>
  );
}
