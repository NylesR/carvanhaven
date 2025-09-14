import FAQCard from "../components/FAQ/Card";
import Header from "../components/FAQ/Header";
import Button from "../components/Button";
import Link from "next/dist/client/link";

export default function FAQ() {
  return (
    <>
      <div className="bg-faq min-h-screen">
        <div className="bg-background/92 w-screen md:w-3/4 min-h-screen p-8 rounded mx-auto">
          <div className="text-foreground w-7/8 md:w-3/4 text-charcoal font-bold mb-4 text-center mx-auto p-12 md:px-6 rounded">
            <h2 className="text-2xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex items-center flex-col md:flex-row md:justify-center gap-8 mb-8">
            <Link href="#for-investors">
              <Button>For Investors</Button>
            </Link>
            <Link href="#for-renters">
              <Button>For Renters</Button>
            </Link>
          </div>
          <Header title="General Questions" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <FAQCard
              question="What is CarVan Haven?"
              answer={<p>The 2.5-acre pilot project provides a regulated vehicle dwelling community that reduces urban overcrowding, supports public safety, and boosts local economic activity.</p>}
            />
            <FAQCard
              question="Why is this project needed?"
              answer={<p>Nearby cities face increased street parking, unsanctioned encampments, and housing shortages. CarVan Haven offers an organized, revenue-generating alternative.</p>}
            />
            <FAQCard
              question="How does this help the community?"
              answer="We help reduce street congestion, keep neighborhoods 
              cleaner, and connect residents with housing and employment 
              support — all while boosting local business spending."
            />
          </div>

          <span id="for-investors" />
          <Header title="For Investors" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <FAQCard
              question="What zoning or permits are required?"
              answer={<p>We will work with the city to secure zoning approval for long-term vehicle dwelling and necessary infrastructure permits (fencing, sanitation, lighting, utility connections).</p>}
            />
            <FAQCard
              question="What partnerships will be in place?"
              answer={<p>We will formalize partnerships with local housing authorities, mental health providers, workforce agencies, and nonprofits for on-site referrals.</p>}
            />
            <FAQCard
              question="How will success be measured?"
              answer={<p>Metrics will include occupancy rates, law enforcement incident reports, resident referrals to housing programs, and local business impact surveys.</p>}
            />
            <FAQCard
              question="How do you ensure resident safety?"
              answer={
                <ul className="list-disc list-inside text-left">
                  <li>Verification of ICE-compliant lawful residency</li>
                  <li>Proof of vehicle registration, insurance, and operability</li>
                  <li>Limited background checks focused on recent violent and serious property crimes (case-by-case review)</li>
                  <li>Enforced quiet hours and community rules</li>
                </ul>
              }
            />
            <FAQCard
              question="How is security managed?"
              answer={
                <ul className="list-disc list-inside text-left">
                  <li>Controlled gated entry and exit</li>
                  <li>Security lighting</li>
                  <li>Nighttime patrols during quiet hours</li>
                  <li>Locked storage containers after hours</li>
                </ul>
              }
            />
            <FAQCard
              question="How does this benefit the city and local economy?"
              answer={
                <ul className="list-disc list-inside text-left">
                  <li>Reduces unsanctioned vehicle dwelling in high-density areas</li>
                  <li>Generates ongoing permit, licensing, and potential tax revenue</li>
                  <li>Encourages local spending on goods and services</li>
                  <li>Provides actionable pilot data for future expansion</li>
                </ul>
              }
            />
          </div>
          <span id="for-renters" />
          <Header title="For Renters" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <FAQCard
              question="Who can live here?"
              answer={<p>Anyone with legal residency in the U.S. (ICE-compliant), a
                registered, insured, and operable vehicle, and a willingness to follow community rules can live here.</p>}
            />
            <FAQCard
              question="Do you allow pets?"
              answer={<p>Yes! We have a dog park and pet-friendly areas. Pets must be leashed or contained,
                and owners must clean up after them.</p>}
            />
            <FAQCard
              question="Are background checks required?"
              answer={<p>Yes, but we only screen for recent violent or serious property crimes.
                Older or minor offenses won’t automatically disqualify you.</p>}
            />
            <FAQCard
              question="What’s included?"
              answer={
                <ul className="list-disc list-inside text-left">
                  <li>Secure gated entry</li>
                  <li>Restrooms and showers</li>
                  <li>Dog park</li>
                  <li>On-site office and support</li>
                  <li>Access to community programs</li>
                </ul>
              }
            />
            <FAQCard
              question="How does this help the community?"
              answer="We help reduce street congestion, keep neighborhoods cleaner, and connect residents with housing and employment support — all while boosting local business spending."
            />
            <FAQCard
              question="How long can I stay?"
              answer="We offer month-to-month rentals. You can stay as long as you follow the rules and pay rent on time."
            />
            <FAQCard
              question="What are the quiet hours?"
              answer="From 10 PM - 6 AM daily."
            />
          </div>
        </div>
      </div>
    </>
  );
}
