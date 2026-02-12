export default function CalendlyIframe() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-primary/10">
      <iframe
        src="https://calendly.com/ghazanfaridrees/break-the-ice?hide_event_type_details=1&hide_gdpr_banner=1"
        width="100%"
        frameBorder="0"
        title="Schedule a meeting with Ghazanfar Idrees"
        className="min-h-[500px] h-[60vh] md:h-[700px]"
      ></iframe>
    </div>
  )
}

