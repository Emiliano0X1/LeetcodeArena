import Image from "next/image";
import Header from "./compoments/header";

export default function Home() {
  return (
      <div className="bg-[#272727] min-h-screen">
          <Header></Header>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mt-5 text-white">Leetcode Home Page</h1>
      </div>
  );
}
