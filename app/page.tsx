import NavBar from "./components/NavBar";
import GameCard from "./components/Card";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col text-center my-16">
        <p className="text-4xl font-bold my-2">
          Welcome to Yassir's Playground
        </p>
        <p className=" italic my-2">Choose from one of our games from below</p>
      </div>
      <div className="grid md:grid-cols-3 grid-row-1 justify-items-center">
        <GameCard
          title={"Get THAT Number!"}
          description={"A simple game"}
          content={"This is a simple game"}
          link={"/getthatnumber/play/"}
        />
        <GameCard
          title={"Worduko"}
          description={"A simple game"}
          content={"This is a simple game"}
          link={"/getthatnumber/play/"}

        />
        <GameCard
          title={"Lorem Ipsum"}
          description={"A simple game"}
          content={"This is a simple game"}
          link={"/getthatnumber/play/"}

          />
      </div>
    </div>
  );
}
