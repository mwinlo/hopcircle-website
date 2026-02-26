import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — HopCircle",
  description:
    "How HopCircle collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-charcoal-light text-sm">
            Last updated: February 2026
          </p>

          <div className="mt-10 space-y-8 text-charcoal leading-relaxed">
            <Section title="Overview">
              <p>
                HopCircle (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
                &ldquo;us&rdquo;) is committed to protecting your privacy. This
                policy explains how we collect, use, and safeguard your
                information when you use our mobile application and website.
              </p>
              <p>
                We comply with the Australian Privacy Principles (APPs) under
                the <em>Privacy Act 1988</em> (Cth).
              </p>
            </Section>

            <Section title="Information We Collect">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Account information:</strong> Phone number (used for
                  verification), your name, and your child&rsquo;s school and
                  year group.
                </li>
                <li>
                  <strong>Profile information:</strong> Optional details like
                  interests and suburb to help you connect with other families.
                </li>
                <li>
                  <strong>Children&rsquo;s information:</strong> First name, age
                  or year group, and school — used solely to facilitate playdate
                  matching.
                </li>
                <li>
                  <strong>Messages:</strong> Content you send through in-app
                  chat to coordinate playdates with other families.
                </li>
                <li>
                  <strong>Usage data:</strong> How you interact with the app
                  (e.g. screens visited, features used) to help us improve it.
                </li>
                <li>
                  <strong>Device information:</strong> Device type and operating
                  system version for crash reporting and compatibility.
                </li>
              </ul>
            </Section>

            <Section title="How We Use Your Information">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  To verify your identity and connect you with other parents at
                  your child&rsquo;s school
                </li>
                <li>To match families for playdates based on availability and preferences</li>
                <li>
                  To facilitate in-app messaging between connected families
                </li>
                <li>
                  To send you relevant push notifications about playdates,
                  matches, and messages
                </li>
                <li>To improve and maintain our service</li>
                <li>To respond to support requests</li>
              </ul>
            </Section>

            <Section title="Who Can See Your Information">
              <p>
                Only verified parents at your child&rsquo;s school can see your
                profile. Your information is <strong>never sold</strong> to third
                parties or used for advertising.
              </p>
              <p>We may share limited data with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Firebase (Google Cloud):</strong> Our infrastructure
                  provider for authentication, data storage, and push
                  notifications. Data is stored in Australian data centres.
                </li>
                <li>
                  <strong>Apple:</strong> For App Store distribution and crash
                  reporting.
                </li>
              </ul>
            </Section>

            <Section title="Data Storage &amp; Security">
              <p>
                We use industry-standard security measures including encryption
                in transit (TLS) and at rest. Your data is stored securely on
                Firebase (Google Cloud) infrastructure with data residency in
                Australia.
              </p>
              <p>
                Access to user data is restricted to authorised personnel only
                and protected by multi-factor authentication.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p>
                HopCircle is designed for parents, not children. We do not
                knowingly collect personal information directly from children
                under 16. Children&rsquo;s first names and year groups are
                provided by their parents and are only visible to connected
                families at the same school.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>Under the Australian Privacy Act, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Access</strong> the personal information we hold about
                  you
                </li>
                <li>
                  <strong>Correct</strong> any inaccurate or outdated information
                </li>
                <li>
                  <strong>Delete</strong> your account and all associated data —
                  you can do this directly within the app under Settings
                </li>
                <li>
                  <strong>Complain</strong> to the Office of the Australian
                  Information Commissioner (OAIC) if you believe your privacy
                  has been breached
                </li>
              </ul>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain your data for as long as your account is active. When
                you delete your account, all personal data (profile, children,
                messages, matches, and playdates) is permanently removed within
                30 days.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this policy from time to time. We&rsquo;ll notify
                you of significant changes through the app or by email. Your
                continued use of HopCircle after changes constitutes acceptance
                of the updated policy.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about this policy? Email us at{" "}
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
