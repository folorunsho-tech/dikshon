import { useState } from "react";
import FontSelect from "./components/FontSelect";
import ThemeSwitch from "./components/ThemeSwitch";
import SearchBox from "./components/SearchBox";
import { BiBookAlt } from "react-icons/bi";
// import { BsFillPlayFill,BsStopFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {
  const fonts = [
    "Poppins",
    "Roboto",
    "Montserrat",
    "Domine",
    "Merriweather",
    "Arvo",
  ];
  const [theme, setTheme] = useState("dark");
  const [selected, setSelected] = useState(fonts[0]);
  const [currSeacrh, setCurrSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className={`theme-${theme} ${selected.toLowerCase()} `}>
      <section className={`space-y-8 p-6 w-full max-w-screen-lg md:mx-auto `}>
        <header className="flex flex-col w-full gap-6">
          <nav className="flex justify-between items-center">
            <BiBookAlt className="text-4xl" />
            <div className="flex gap-3 items-center">
              <FontSelect
                selected={selected}
                setSelected={setSelected}
                fonts={fonts}
              />
              <ThemeSwitch theme={theme} setTheme={setTheme} />
            </div>
          </nav>
          <section>
            <SearchBox
              setCurrSearch={setCurrSearch}
              setIsLoading={setIsLoading}
            />
          </section>
        </header>
        {currSeacrh.length > 0 ? (
          <main className="space-y-6">
            <section className="flex justify-between items-center">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-black capitalize">
                  {currSeacrh[0]?.word}
                </h2>
                <p className="text-lg text-purple-700 font-bold">
                  {currSeacrh[0]?.phonetics[1]?.text}
                </p>
              </div>
              <p>play</p>
            </section>
            <article className="flex flex-col gap-6 h-full">
              {currSeacrh[0]?.meanings.map((meaning: any) => {
                return (
                  <div key={`${currSeacrh[0]?.word}${meaning?.partOfSpeech}`}>
                    <h2 className="italic font-bold word-type text-lg">
                      {meaning?.partOfSpeech}
                    </h2>
                    <div>
                      <h3 className="font-semibold text-md italic mt-4 text-gray-400 capitalize">
                        meaning
                      </h3>
                      <ul className="ml-6 space-y-2 mt-4">
                        {meaning.definitions.map((def: any, index: number) => (
                          <li
                            key={`${meaning?.partOfSpeech}${index + 1}`}
                            className="font-semibold max-w-prose text-sm list-disc"
                          >
                            {def.definition}
                          </li>
                        ))}
                      </ul>
                      {meaning.antonyms.length > 0 && (
                        <div className="font-semibold text-sm capitalize italic mt-4 flex items-top gap-3">
                          <h3 className=" text-gray-400 ">antonyms</h3>

                          <p className="flex gap-3 flex-wrap">
                            {meaning.antonyms.map(
                              (antonym: string, index: number) => (
                                <span
                                  key={`${antonym}${index + 1}`}
                                  className="text-purple-700"
                                >
                                  {antonym}
                                </span>
                              )
                            )}
                          </p>
                        </div>
                      )}
                      {meaning.synonyms.length > 0 && (
                        <div className="font-semibold text-sm capitalize italic mt-4 flex items-top gap-3">
                          <h3 className=" text-gray-400 ">synonyms</h3>
                          <p className="flex gap-3 flex-wrap">
                            {meaning.synonyms.map(
                              (synonym: string, index: number) => (
                                <span
                                  key={`${synonym}${index + 1}`}
                                  className="text-purple-700"
                                >
                                  {synonym}
                                </span>
                              )
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </article>
            <section className="flex gap-5 items-center text-sm text-gray-400 ">
              <h4 className="font-bold italic capitalize">Source:</h4>
              <a href="#" className="underline">
                {currSeacrh[0]?.sourceUrls[0]}
              </a>
            </section>
          </main>
        ) : (
          <main className="h-screen pt-32">
            {isLoading === false && (
              <h2>
                <b>Search</b> for a word to show it's meaning
              </h2>
            )}

            {isLoading === true && (
              <div>
                <AiOutlineLoading3Quarters className="animate-spin text-5xl mx-auto" />
              </div>
            )}
          </main>
        )}
      </section>
    </main>
  );
}

export default App;
