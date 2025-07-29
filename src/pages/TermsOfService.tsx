import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">Last updated: January 29, 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Ejefarms' services, you accept and agree to be bound by these 
                  Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  Ejefarms provides:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Sustainable palm oil production and distribution</li>
                  <li>AI-powered agricultural technology solutions</li>
                  <li>Blockchain-based traceability platform</li>
                  <li>Farm-to-retail marketplace services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in fraudulent or harmful activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                <p>
                  Payment terms are established for each transaction. We accept various payment methods 
                  and process payments securely. All prices are subject to change with notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
                <p>
                  All content, technology, and materials provided by Ejefarms are protected by 
                  intellectual property rights. Users may not reproduce, distribute, or create 
                  derivative works without permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p>
                  Ejefarms shall not be liable for any indirect, incidental, special, or consequential 
                  damages arising from the use of our services, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend access to our services at any time, 
                  with or without cause, with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
                <p>
                  These terms are governed by the laws of Nigeria. Any disputes will be resolved 
                  through appropriate legal channels in Nigeria.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, contact us at:
                  <br />
                  Email: legal@ejefarms.io
                  <br />
                  Address: Lagos, Nigeria
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}