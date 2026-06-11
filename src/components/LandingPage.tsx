import { HeroSection } from "./HeroSection";
import { BrandStorySection } from "./BrandStorySection";
import { ProductCollectionSection } from "./ProductCollectionSection";
import { FarmersOriginSection } from "./FarmersOriginSection";
import { ExportPartnershipSection } from "./ExportPartnershipSection";
import { B2BInquirySection } from "./B2BInquirySection";
import { SocialPresenceSection } from "./SocialPresenceSection";
import { Footer } from "./Footer";
import { LeadCaptureModal } from "./LeadCaptureModal";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <BrandStorySection />
      <ProductCollectionSection />
      <FarmersOriginSection />
      <ExportPartnershipSection />
      <B2BInquirySection />
      <SocialPresenceSection />
      <Footer />
      <LeadCaptureModal />
      <WhatsAppFloat />
    </main>
  );
}
