import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between py-4 border-b-2 items-center">
      <div className="font-bold">
        <p>.yassir/playground</p>
      </div>
      {/* <div className="invisible md:visible space-x-4">
        <button>Get THAT Number!</button>
        <button>Worduko</button>
        <button>Lorem Ipsum</button>
      </div> */}
      <div>
        <Button asChild className="hidden md:block">
          <Link href="https://yassirutara.netlify.app">my portfolio</Link></Button>
        <button className="md:hidden">hamburger</button>
      </div>
    </div>
  );
};
export default NavBar;
