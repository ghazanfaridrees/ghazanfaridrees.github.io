"use client"

import Script from "next/script"

export default function CalendlyWidget() {
  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <div
        className="calendly-inline-widget rounded-lg overflow-hidden shadow-lg border border-primary/10"
        data-url="https://calendly.com/ghazanfaridrees/break-the-ice?hide_event_type_details=1&hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </>
  )
}

