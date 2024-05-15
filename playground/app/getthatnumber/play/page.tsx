import NavBar from "@/app/components/NavBar";
import Link
 from "next/link";
export default function GetThatNumber() {
  return (
    <div>
      <NavBar />
      <Link href="/">
      <p className=" text-right">~ go back</p>
      </Link>

      <div className=" min-w-[400px] min-h-[600px] border-2 border-black">
        <p>test</p>

      </div>
    </div>
  );
}
