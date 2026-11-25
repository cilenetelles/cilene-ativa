import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { SITE_URL } from "../config";

type Props = { size?: number; alt: string; className?: string };

// Real, scannable QR Code generated in the browser from the public URL.
export default function QrImage({ size = 132, alt, className = "" }: Props) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(SITE_URL, {
      errorCorrectionLevel: "M",
      margin: 1,
      width: size * 3,
      color: { dark: "#004D3D", light: "#FFFFFF" },
    })
      .then(setSrc)
      .catch(() => setSrc(""));
  }, [size]);

  return src ? (
    <img src={src} alt={alt} width={size} height={size} className={className} />
  ) : (
    <div style={{ width: size, height: size }} className={`animate-pulse rounded-lg bg-light ${className}`} />
  );
}
