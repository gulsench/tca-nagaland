import { MapPin, Navigation, Clock } from "lucide-react";
import { openingHours, site } from "@/lib/site";
import FadeIn from "./FadeIn";

export default function Hours() {
  return (
    <section className="section bg-ink-900">
      <div className="container-px">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow mb-3">Visit Us</p>
          <h2 className="heading text-4xl text-white md:text-5xl">
            Opening Hours & Location
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Opening hours table */}
          <FadeIn className="rounded-2xl border border-white/10 bg-ink-800 p-6 md:p-8">
            <h3 className="flex items-center gap-2 font-heading text-lg font-bold uppercase tracking-wide text-white">
              <Clock className="h-5 w-5 text-crimson" aria-hidden="true" />
              Opening Hours
            </h3>
            <table className="mt-5 w-full text-sm">
              <tbody>
                {openingHours.map((row) => (
                  <tr
                    key={row.day}
                    className="border-b border-white/5 last:border-0"
                  >
                    <th
                      scope="row"
                      className="py-3 text-left font-medium text-white/80"
                    >
                      {row.day}
                    </th>
                    <td
                      className={`py-3 text-right font-semibold ${
                        row.closed ? "text-crimson" : "text-white"
                      }`}
                    >
                      {row.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>

          {/* Map + address */}
          <FadeIn delay={0.1} className="flex flex-col">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              {/* Google Maps embed for the gym address. */}
              <iframe
                src={site.contact.mapEmbed}
                title={`Map to ${site.name}`}
                className="h-72 w-full md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-ink-800 p-6">
              <p className="flex items-start gap-3 text-white/80">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crimson" aria-hidden="true" />
                {site.contact.address}
              </p>
              <a
                href={site.contact.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 py-2.5 text-xs"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
