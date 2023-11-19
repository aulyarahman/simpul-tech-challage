import { QuickButton } from "@/components";
import CardPopup from "./card-popup";

const Home = () => {
  return (
    <main>
      <section>
        <div className="absolute bottom-20 right-4">
          <CardPopup />
        </div>
        <QuickButton />
      </section>
    </main>
  );
};

export default Home;
