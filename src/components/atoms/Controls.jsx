import { ArrowLeftCircleIcon, ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon, HomeIcon } from "@heroicons/react/20/solid";

export function Controls({onBack, onNext, showBack, showNext}) {
    return (
      <div className="bg-white flex p-4 m-6 rounded-full">
        {showBack && (
            <ArrowLeftIcon className="block h-6 w-6 " aria-hidden="true" onClick={onBack}/>
        )}
        {showNext && (
            <ArrowRightIcon className="block h-6 w-6" aria-hidden="true" onClick={onNext}/>
        )}
      </div>
    )
  }
  