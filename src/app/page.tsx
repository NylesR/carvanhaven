import Card from "./components/Card";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <div className="bg-field min-h-screen">
        <div className="bg-background/92 w-3/4 min-h-screen p-8 rounded mx-auto">
        <div className="bg-accent text-foreground font-bold mb-4 text-center mx-auto px-12 py-24 md:px-6 md:py-12rounded shadow">
          <h3 className="text-2xl mb-6">
            Welcome to CarVan Haven,
          </h3>
          <h2 className="text-5xl">
            A safe haven for you and your car.
          </h2>
        </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <Card
              header="Mission"
              text="Our mission is to provide a safe and welcoming environment for individuals living in their vehicles."
            />
            <Card
              header="Vision"
              text="Our vision is to create a community where everyone has access to safe and affordable living."
            />
            <Card
              header="Plan"
              text=" CarVan Haven is launching its first California community in late 2025. This safe, scalable model will 
              provide affordable, long-term parking and basic services for people living in their cars, vans, and RVs."
            />
          </div>
          <div className="p-4 text-center text-xl font-bold">
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
}
