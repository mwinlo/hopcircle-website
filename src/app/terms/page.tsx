import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — HopCircle",
  description: "Terms and conditions for using the HopCircle app and website.",
};

export default function TermsOfUse() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
        <div className="max-w-5xl mx-auto px-6 flex items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-mark.png"
              alt="HopCircle"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="font-heading font-bold text-lg text-charcoal">
              HopCircle
            </span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-2xl mx-auto">
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-charcoal">
            Terms of Use
          </h1>
          <p className="mt-2 text-charcoal-light text-sm">
            Last updated: February 2026
          </p>

          <div className="mt-10 space-y-8 text-charcoal leading-relaxed">
            <Section title="1. About HopCircle">
              <p>
                HopCircle is a mobile application that helps parents organise
                playdates for their children by connecting families at the same
                school. By using HopCircle, you agree to these terms.
              </p>
            </Section>

            <Section title="2. Eligibility">
              <ul className="list-disc pl-5 space-y-2">
                <li>You must be 18 years or older to create an account.</li>
                <li>
                  You must be a parent or legal guardian of a child enrolled at a
                  school supported by HopCircle.
                </li>
                <li>
                  You must verify your identity via phone number during
                  registration.
                </li>
              </ul>
            </Section>

            <Section title="3. Your Account">
              <p>
                You are responsible for maintaining the security of your account
                and for all activity under it. You agree to provide accurate
                information and keep it up to date. You may delete your account
                at any time through the app&rsquo;s Settings.
              </p>
            </Section>

            <Section title="4. Acceptable Use">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Provide false or misleading information about yourself or your
                  children
                </li>
                <li>
                  Use HopCircle for any purpose other than organising playdates
                  and connecting with families
                </li>
                <li>
                  Harass, bully, or send inappropriate messages to other users
                </li>
                <li>
                  Share another family&rsquo;s personal information outside of
                  HopCircle
                </li>
                <li>
                  Attempt to access other users&rsquo; accounts or circumvent
                  security measures
                </li>
                <li>
                  Use automated tools, bots, or scrapers to access the service
                </li>
              </ul>
            </Section>

            <Section title="5. Playdates &amp; Safety">
              <p>
                HopCircle facilitates connections between families but{" "}
                <strong>
                  does not supervise, manage, or guarantee the safety of
                  playdates
                </strong>
                . Parents are solely responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The supervision of their children during playdates</li>
                <li>
                  Assessing the suitability of any playdate arrangement
                </li>
                <li>
                  Communicating any special needs, allergies, or requirements
                </li>
              </ul>
              <p>
                We encourage parents to meet in public places for initial
                playdates and to communicate openly with other families.
              </p>
            </Section>

            <Section title="6. Content &amp; Messages">
              <p>
                You retain ownership of content you post (profile information,
                messages). By using HopCircle, you grant us a limited licence to
                display your content to other users as part of the
                service&rsquo;s normal operation.
              </p>
              <p>
                We may remove content that violates these terms or that we
                reasonably consider harmful.
              </p>
            </Section>

            <Section title="7. Privacy">
              <p>
                Your use of HopCircle is also governed by our{" "}
                <Link
                  href="/privacy"
                  className="text-teal hover:text-teal-deep underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                , which explains how we collect and protect your data.
              </p>
            </Section>

            <Section title="8. Service Availability">
              <p>
                We aim to keep HopCircle available at all times but do not
                guarantee uninterrupted service. We may modify or discontinue
                features with reasonable notice. The app is currently available
                in Perth, Western Australia, with plans to expand.
              </p>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>
                To the maximum extent permitted by Australian Consumer Law,
                HopCircle is provided &ldquo;as is&rdquo;. We are not liable
                for:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Any interactions, disputes, or incidents between families
                </li>
                <li>
                  Loss or damage arising from your use of the service
                </li>
                <li>Temporary service interruptions or data loss</li>
              </ul>
              <p>
                Nothing in these terms excludes or limits any rights you have
                under the Australian Consumer Law that cannot be excluded or
                limited.
              </p>
            </Section>

            <Section title="10. Termination">
              <p>
                We may suspend or terminate your account if you breach these
                terms. You may delete your account at any time. Upon
                termination, your data will be handled in accordance with our
                Privacy Policy.
              </p>
            </Section>

            <Section title="11. Changes to These Terms">
              <p>
                We may update these terms from time to time. We&rsquo;ll notify
                you of significant changes through the app. Continued use after
                changes constitutes acceptance.
              </p>
            </Section>

            <Section title="12. Governing Law">
              <p>
                These terms are governed by the laws of Western Australia. Any
                disputes will be subject to the exclusive jurisdiction of the
                courts of Western Australia.
              </p>
            </Section>

            <Section title="13. Contact">
              <p>
                Questions about these terms? Email us at{" "}
                <a
                  href="mailto:support@hopcircle.app"
                  className="text-teal hover:text-teal-deep underline underline-offset-2"
                >
                  support@hopcircle.app
                </a>
                .
              </p>
            </Section>
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-charcoal/10">
            <Link
              href="/"
              className="text-sm text-teal hover:text-teal-deep font-medium"
            >
              &larr; Back to HopCircle
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading font-bold text-xl text-charcoal mb-3">
        {title}
      </h2>
      <div className="space-y-3 text-[15px]">{children}</div>
    </section>
  );
}
