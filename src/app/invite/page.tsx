import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're invited to HopCircle",
  description:
    "Download HopCircle and your families will be connected straight away.",
};

export default function InvitePage() {
  return (
    <>
      <meta
        httpEquiv="refresh"
        content="2;url=https://apps.apple.com/au/app/hopcircle/id6759137070"
      />
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F0EB",
          fontFamily:
            'var(--font-nunito), Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          padding: "24px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "400px",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>
            🐰
          </div>
          <h1
            style={{
              color: "#1A1A2E",
              fontSize: "28px",
              fontWeight: 800,
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            You&apos;ve been invited to HopCircle
          </h1>
          <p
            style={{
              color: "#1A1A2E",
              fontSize: "17px",
              lineHeight: 1.5,
              margin: "0 0 32px",
              opacity: 0.7,
            }}
          >
            Download the app and your families will be connected straight away.
          </p>
          <a
            href="https://apps.apple.com/au/app/hopcircle/id6759137070"
            style={{
              display: "inline-block",
              backgroundColor: "#FD2D46",
              color: "#fff",
              fontSize: "18px",
              fontWeight: 700,
              padding: "16px 40px",
              borderRadius: "14px",
              textDecoration: "none",
            }}
          >
            Get HopCircle
          </a>
          <p
            style={{
              color: "#1A1A2E",
              fontSize: "13px",
              marginTop: "24px",
              opacity: 0.4,
            }}
          >
            Redirecting to the App Store...
          </p>
        </div>
      </div>
    </>
  );
}
