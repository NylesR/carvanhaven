import Button from "../components/Button";
import Link from "next/dist/client/link";

export default function Donate() {
  return (
    <>
      <div className="bg-donate min-h-screen flex items-center justify-center">
        <div className="bg-accent/92 w-screen md:w-1/2 h-3/4 p-8 rounded shadow-xl">
          <h2 className="text-4xl md:text-3xl font-bold mb-4 text-center mx-auto px-12 py-6">
            Support CarVan Haven
          </h2>
          <div className=" text-lg text-center flex flex-col gap-6 items-center">
            <p>Your support helps us provide a safe and welcoming space for those in need.</p>
            <Link href="/donate">
              <Button>
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
