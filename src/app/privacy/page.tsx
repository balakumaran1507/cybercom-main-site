import { SectionHeading } from "@/components/SectionTypography";

export const metadata = {
  title: "Privacy Policy",
  description: "Read CyberCom's privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-48 pb-24 px-6 md:px-8 max-w-[800px] mx-auto">
      <SectionHeading className="mb-12">Privacy Policy</SectionHeading>
      
      <div className="prose prose-invert prose-p:text-[#8a8f98] prose-p:leading-relaxed prose-headings:text-white prose-headings:font-medium prose-strong:text-white">
        <p className="mb-8">Last updated: March 14, 2026</p>
        
        <h2 className="text-xl mb-4">1. Introduction</h2>
        <p className="mb-6">
          At CyberCom, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our CTF hosting services and website.
        </p>

        <h2 className="text-xl mb-4">2. Information We Collect</h2>
        <p className="mb-6">
          We collect information you provide directly to us, such as when you request a quote, create an account, or contact our support team. This may include your name, email address, organisation details, and event requirements.
        </p>

        <h2 className="text-xl mb-4">3. How We Use Your Information</h2>
        <p className="mb-6">
          We use the information we collect to provide, maintain, and improve our services, communicate with you about your event, and send you technical notices and support messages.
        </p>

        <h2 className="text-xl mb-4">4. Data Storage & Security</h2>
        <p className="mb-6">
          We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and access is restricted to authorised personnel only.
        </p>

        <h2 className="text-xl mb-4">5. Sharing of Information</h2>
        <p className="mb-6">
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
        </p>

        <h2 className="text-xl mb-4">6. Cookies</h2>
        <p className="mb-6">
          We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction.
        </p>

        <h2 className="text-xl mb-4">7. Your Rights</h2>
        <p className="mb-6">
          You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.
        </p>

        <h2 className="text-xl mb-4">8. Third-Party Links</h2>
        <p className="mb-6">
          Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.
        </p>

        <h2 className="text-xl mb-4">9. Changes to This Policy</h2>
        <p className="mb-6">
          CyberCom reserves the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new policy on this page.
        </p>

        <h2 className="text-xl mb-4">10. Contact Us</h2>
        <p className="mb-6">
          If you have any questions regarding this Privacy Policy, you may contact us at: <br />
          <strong>privacy@cybercom.hosting</strong>
        </p>
      </div>
    </main>
  );
}
