import Image from "next/image";
import Sidebar from "~/components/Sidebar";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function Home() {
  return (
      <>
        
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          dsf
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started by editing&nbsp; sf
              <code className="font-mono font-bold">src/app/page.tsx</code>
            </p>
          </div>
          <div className="relative flex place-items-center before:absolute before:h-[400px] before:w-[780px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Image
                src="/assets/nextjs.svg"
                alt="Next.js Logo"
                width={100}
                height={100}
              />
              <h2 className="text-2xl font-bold">Next.js</h2>
              <p>Documentation →</p>
            </div>
            <button className=" outline">Button</button>
          </div>
        </main>
    </>
  );
}
