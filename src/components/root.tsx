import { FC, ReactNode } from "react";
import { SearchIcon } from "./icons";
import { RootProvider } from "./provider";

const Sidebar = () => (
  <aside className="w-[260px] h-screen bg-[#4F4F4F] border-r-[1px] border-white"></aside>
);

const Navbar = () => (
  <nav className="w-full bg-[#828282] px-3 py-4">
    <SearchIcon color="white" />
  </nav>
);

const Root: FC<{ children: ReactNode }> = ({ children }) => (
  <RootProvider>
    <div className="flex">
      <Sidebar />
      <main className="w-screen">
        <Navbar />
        <section className="">{children}</section>
      </main>
    </div>
  </RootProvider>
);

export default Root;
