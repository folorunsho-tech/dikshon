import { useState } from "react";
import FontSelect from "./components/FontSelect";
import ThemeSwitch from "./components/ThemeSwitch";
import SearchBox from "./components/SearchBox";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <section className={`space-y-8 p-6  h-screen theme-${theme}`}>
      <header className="flex flex-col gap-6">
        <nav className="flex justify-between items-center w-full">
          <BiBookAlt className="text-4xl" />
          <div className="flex gap-4 items-center md:w-1/3">
            <FontSelect />
            <ThemeSwitch theme={theme} setTheme={setTheme} />
          </div>
        </nav>
        <section>
          <SearchBox />
        </section>
      </header>
      <main className="flex flex-col gap-6">
        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-black">Keyboard</h2>
            <p className="text-lg text-purple-700 font-bold">/ki:bo:d/</p>
          </div>
          <p>play</p>
        </section>
        <article className="flex flex-col gap-6">
          <h2 className="italic font-bold word-type text-lg">noun</h2>
          <div>
            <h3 className="font-semibold text-md italic text-gray-400 capitalize">
              meaning
            </h3>
            <ul className="ml-6 mt-4">
              <li className="font-semibold max-w-prose text-sm list-disc">
                stuff
              </li>
            </ul>
          </div>
        </article>
        <section className="flex gap-5 items-center text-sm text-gray-400 ">
          <h4 className="font-bold italic capitalize">Source:</h4>
          <a href="#" className="underline">
            Some Wikipedia Link
          </a>
        </section>
      </main>
    </section>
  );
}

export default App;
