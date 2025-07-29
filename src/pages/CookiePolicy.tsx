import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Cookie Policy
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">Last updated: January 29, 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  enabling certain features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Essential Cookies</h3>
                    <p>Required for the website to function properly, including security and authentication.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Performance Cookies</h3>
                    <p>Help us understand how visitors interact with our website by collecting anonymous data.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Functionality Cookies</h3>
                    <p>Remember your preferences and provide enhanced features and personal content.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Cookies</h3>
                    <p>Help us analyze website usage to improve our services and user experience.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Cookies</h2>
                <p className="mb-4">
                  We may use third-party services that place cookies on your device:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Payment processors for transaction security</li>
                  <li>Social media platforms for sharing features</li>
                  <li>Cloud service providers for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Managing Cookies</h2>
                <p className="mb-4">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>
                <p className="mt-4">
                  Note: Disabling certain cookies may limit website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookie Retention</h2>
                <p>
                  Cookies remain on your device for different periods:
                </p>
                <ul className="list-disc ml-6 space-y-2 mt-4">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain until expiration date or manual deletion</li>
                  <li><strong>Analytics cookies:</strong> Typically expire after 24 months</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Changes will be posted on this page 
                  with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                <p>
                  If you have questions about our use of cookies, please contact us at:
                  <br />
                  Email: privacy@ejefarms.io
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