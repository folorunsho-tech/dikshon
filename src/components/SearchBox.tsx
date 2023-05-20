import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

type SearchProps = {
  setCurrSearch: (currSearch: []) => void;
  setIsLoading: (isLoading: boolean) => void;
};
export default function SearchBox({
  setCurrSearch,
  setIsLoading,
}: SearchProps) {
  const [query, setQuery] = useState("");

  const getWord = async (word: string) => {
    setIsLoading(true);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then((res) => {
        setCurrSearch(res.data);
        setIsLoading(false);
      });
  };
  return (
    <div className="w-full  md:mx-auto font-semibold">
      <Combobox value={query} onChange={setQuery}>
        <div className="relative mt-1">
          <div className="relative rounded-md w-full cursor-default overflow-hidden bg-gray-300 text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              onKeyUp={async (e) => {
                if (e.key === "Enter") {
                  getWord(query);
                  e.target.value = "";
                }
              }}
              className="w-full border-none py-2 h-12 pl-3 pr-10 text-md bg-gray-200 leading-5 text-gray-900 focus:ring-0"
              placeholder="Search for a word"
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button
              onClick={(e) => {
                getWord(query);
                e.target.value = "";
              }}
              className="absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <FiSearch className="h-5 w-5 text-gray-500" aria-hidden="true" />
            </Combobox.Button>
          </div>
        </div>
      </Combobox>
    </div>
  );
}
