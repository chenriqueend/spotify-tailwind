import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/20 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/20 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 pt-4 ">
            <a
              href="#"
              className="bg-white/5 group gap-4 flex items-center rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={100}
                height={100}
                alt="Album do viagra boys"
              />
              <strong> Call of the wild</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group gap-4 flex items-center rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={100}
                height={100}
                alt="Album do viagra boys"
              />
              <strong> Call of the wild</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group gap-4 flex items-center rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={100}
                height={100}
                alt="Album do viagra boys"
              />
              <strong> Call of the wild</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group gap-4 flex items-center rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={100}
                height={100}
                alt="Album do viagra boys"
              />
              <strong> Call of the wild</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group gap-4 flex items-center rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={100}
                height={100}
                alt="Album do viagra boys"
              />
              <strong> Call of the wild</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group gap-4 flex items-center rounded overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={100}
                height={100}
                alt="Album do viagra boys"
              />
              <strong> Call of the wild</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Carlos Henrique
          </h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/dailyMix.jpg"
                width={120}
                height={120}
                alt="Album do viagra boys"
              />
              <strong>Daily mix 01</strong>
              <span className="text-xs text-zinc-400">Baguncinha onlaine</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/dailyMix.jpg"
                width={120}
                height={120}
                alt="Album do viagra boys"
              />
              <strong>Daily mix 02</strong>
              <span className="text-xs text-zinc-400">Baguncinha onlaine</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/dailyMix.jpg"
                width={120}
                height={120}
                alt="Album do viagra boys"
              />
              <strong>Daily mix 03</strong>
              <span className="text-xs text-zinc-400">Baguncinha onlaine</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/dailyMix.jpg"
                width={120}
                height={120}
                alt="Album do viagra boys"
              />
              <strong>Daily mix 04</strong>
              <span className="text-xs text-zinc-400">Baguncinha onlaine</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/dailyMix.jpg"
                width={120}
                height={120}
                alt="Album do viagra boys"
              />
              <strong>Daily mix 05</strong>
              <span className="text-xs text-zinc-400">Baguncinha onlaine</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
