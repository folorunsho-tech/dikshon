import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FiCheck } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
type FontSelectProps = {
  selected: string;
  setSelected: (selected: string) => void;
  fonts: string[];
};
export default function FontSelect({
  selected,
  setSelected,
  fonts,
}: FontSelectProps) {
  return (
    <div className="text-gray-800 z-50  w-28 font-semibold">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-gray-100 py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {fonts.map((font, fontIndx) => (
                <Listbox.Option
                  key={fontIndx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={font}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {font}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <FiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
