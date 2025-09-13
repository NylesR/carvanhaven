import Card from "../components/Card";
import Button from "../components/Button";

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
        </div>
      </div>
    </>
  );
}
