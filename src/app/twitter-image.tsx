import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = SITE.ogImage.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(155deg, #1f4a35 0%, #2e6e4a 48%, #1a3d3a 100%)",
          color: "#f7faf8",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>CuboSites</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Bookkeeping for every construction site
          </div>
          <div style={{ fontSize: 28, color: "rgba(247,250,248,0.82)" }}>
            Expenses · Payments · Staff · Photos · Reports
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(247,250,248,0.7)",
          }}
        >
          <span>www.cubosites.com</span>
          <span>Built by Cubixmet</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
