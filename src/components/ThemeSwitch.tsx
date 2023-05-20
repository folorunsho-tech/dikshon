import { Switch } from "@headlessui/react";
import { BsSunFill } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";
type ThemeSwitchProps = {
  theme: string;
  setTheme: (theme: string) => void;
};
export default function ThemeSwitch({ theme, setTheme }: ThemeSwitchProps) {
  return (
    <div className="flex w-full gap-2 items-center">
      <BsSunFill className="text-2xl mt-2" />
      <Switch
        checked={theme === "dark"}
        onChange={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
        className={`${theme === "dark" ? "bg-purple-900" : "bg-gray-500"}
           inline-flex mt-2 h-[35px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Change Theme</span>
        <span
          aria-hidden="true"
          className={`${theme === "dark" ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <GiNightSleep className="text-2xl mt-2" />
    </div>
  );
}
