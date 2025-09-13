import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <div className="bg-hero min-h-screen">
        <div className="bg-background w-3/4 h-3/4 p-8 rounded shadow mx-auto my-8">
          <h2 className="text-foreground text-5xl font-bold mb-4 text-center mx-auto px-12 py-24 rounded shadow">
            A safe haven for you and your car
          </h2>
          <h3 className="text-center text-2xl mb-6 text-foreground">
            Welcome to Carvan Haven, your trusted space for you and your vehicle.
          </h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="mission text-center p-12 flex-1">
                <h3 className= "text-3xl p-8">
                  Mission
                </h3>
                <Text>
                  Our mission is to serve retirees, veterans, digital nomads, and SSI 
                  recipients seeking stability and community without the high costs of 
                  traditional housing.
                </Text>
              </div>
            <div className="vision text-center p-12 flex-1">
              <h3 className= "text-3xl p-8">
                Vision
              </h3>
                <Text>
                  CarVan Haven is launching its first California community in late 2025.
                  This safe, scalable model will provide affordable, long-term parking and 
                  basic services for people living in their cars, vans, and RVs.
                </Text>
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
