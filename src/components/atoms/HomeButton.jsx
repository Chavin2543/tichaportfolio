import { HomeIcon } from "@heroicons/react/20/solid";

export function HomeButton({onClick}) {
    return (
      <button className="bg-white p-4 m-6 rounded-full hover:bg-indigo-300" onClick={onClick}>
        <HomeIcon className="block h-6 w-6" aria-hidden="true"/>
      </button>
    )
  }
  