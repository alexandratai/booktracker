import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-['Helvetica'] dark:bg-[#8286B5]">
      <nav className="flex w-full items-center justify-center gap-8 py-6">
        <a href="#home" className="text-sm font-medium text-black dark:text-white">
          Home
        </a>
        <a href="#scan" className="text-sm font-medium text-black dark:text-white">
          Scan
        </a>
        <a href="#books" className="text-sm font-medium text-black dark:text-white">
          Books
        </a>
        <a href="#discover" className="text-sm font-medium text-black dark:text-white">
          Discover
        </a>
        <a href="#about" className="text-sm font-medium text-black dark:text-white">
          About
        </a>
      </nav>
      
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-20 px-16 bg-white dark:bg-[#8286B5] sm:items-start">
        <Image
          src="/butterfly.svg"
          alt="homepage"
          width={1366}
          height={768}
          priority
        />
      </main>
    </div>
  );
}
