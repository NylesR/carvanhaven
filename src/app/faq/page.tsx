import FAQCard from "../components/FAQ/Card";
import Header from "../components/FAQ/Header";

export default function About() {
  return (
    <>
      <div className="bg-field min-h-screen">
        <div className="bg-background/92 w-3/4 min-h-screen p-8 rounded mx-auto">
          <div className="bg-accent text-foreground font-bold mb-4 text-center mx-auto p-12 md:px-6 rounded shadow">
            <h2 className="text-5xl">
              Frequently Asked Questions
            </h2>
            <h3 className="text-2xl">
              F.A.Q
            </h3>
          </div>
          <Header title="For Investors" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <FAQCard 
          question="What is CarVan Haven’s purpose?"
          answer="The 2.5-acre pilot project provides a regulated vehicle dwelling community that 
          reduces urban overcrowding, supports public safety, and boosts local economic activity." />
          <FAQCard 
          question="Why is this project needed?" 
          answer=" Nearby cities face increased street parking, unsanctioned encampments, and housing shortages. 
          CarVan Haven offers an organized, revenue-generating alternative." />
          <FAQCard
          question="What zoning or permits are required?"
          answer=" We will work with the city to secure zoning approval for long-term vehicle dwelling and 
          necessary infrastructure permits (fencing, sanitation, lighting, utility connections)." />
          <FAQCard
          question="What partnerships will be in place?"
          answer=" We will formalize partnerships with local housing authorities, 
          mental health providers, workforce agencies, and nonprofits for on-site referrals." />
          <FAQCard
          question="How does this benefit the city and local economy?"
          answer="Reduces unsanctioned vehicle dwelling in high-density areas
          Generates ongoing permit, licensing, and potential tax revenue
          Encourages local spending on goods and services
          Provides actionable pilot data for future expansion" />
          <FAQCard
          question="How will success be measured?"
          answer="Metrics will include occupancy rates, law enforcement incident reports, 
          resident referrals to housing programs, and local business impact surveys." />
          <FAQCard 
          question="How do you ensure resident safety?" 
          answer={
            <ul className="list-disc list-inside text-left">
              <li>Verification of ICE-compliant lawful residency</li>
              <li>Proof of vehicle registration, insurance, and operability</li>
              <li>Limited background checks focused on recent violent and serious property crimes (case-by-case review)</li>
              <li>Enforced quiet hours and community rules</li>
            </ul>
          } />
          <FAQCard
          question="How is security managed?"
          answer={
            <ul className="list-disc list-inside text-left">
              <li>Controlled gated entry and exit</li>
              <li>Security lighting</li>
              <li>Nighttime patrols during quiet hours</li>
              <li>Locked storage containers after hours</li>
            </ul>
          } />
          </div>
      </div>
    </div>
</>
);
}
