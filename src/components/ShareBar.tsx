import { useState } from "react";
import { SITE_URL } from "../config";
import type { Dict } from "../i18n";
import { QrIcon, ShareIcon } from "./Icons";
import QrModal from "./QrModal";

type Props = { t: Dict };

const btn =
  "flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl border border-line bg-white px-3 text-[14px] font-semibold text-primary transition-colors hover:border-sage hover:bg-light/60";

export default function ShareBar({ t }: Props) {
  const [qrOpen, setQrOpen] = useState(false);
  const [toast, setToast] = useState<string>("");

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 2600);
  };

  const share = async () => {
    const data = { title: "Cilene Telles | Grupo Ativa Brasil", text: t.shareText, url: SITE_URL };
    if (typeof navigator.share === "function") {
      try {
        await navigator.share(data);
        return;
      } catch (err) {
        if ((err as DOMException)?.name === "AbortError") return; // user cancelled
      }
    }
    try {
      await navigator.clipboard.writeText(SITE_URL);
      showToast(t.linkCopied);
    } catch {
      window.prompt(t.copyFailed, SITE_URL);
    }
  };

  return (
    <>
      <div className="flex gap-3">
        <button type="button" onClick={share} className={btn}>
          <ShareIcon width={19} height={19} />
          {t.share}
        </button>
        <button type="button" onClick={() => setQrOpen(true)} className={btn} aria-haspopup="dialog">
          <QrIcon width={19} height={19} />
          {t.showQr}
        </button>
      </div>

      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-6">
        {toast ? (
          <span className="rounded-full bg-deep px-4 py-2.5 text-sm font-medium text-white shadow-lg animate-rise">
            {toast}
          </span>
        ) : null}
      </div>

      <QrModal open={qrOpen} onClose={() => setQrOpen(false)} t={t} />
    </>
  );
}
