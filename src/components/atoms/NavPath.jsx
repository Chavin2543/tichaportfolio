export default function SubNavPath({ stepProgress, onStepClick }) {
    const progressBarWidth = `${stepProgress}%`;

    const getStepClassName = (completionThreshold) => {
        return `cursor-pointer transition-colors duration-300 ${stepProgress >= completionThreshold ? "text-indigo-600" : "text-gray-600"} flex justify-center`;
    };

    return (
      <div>
        <div className="m-6 bg-transparent" aria-hidden="true">
          <div className="overflow-hidden rounded-full bg-transparent">
            <div className="h-2 rounded-full bg-indigo-600 transition-all duration-300 ease-in-out" style={{ width: progressBarWidth }} />
          </div>
          <div className="mt-6 hidden grid-cols-4 text-sm font-medium sm:grid">
            <div className={getStepClassName(25)} onClick={() => onStepClick(25)}>DIGITAL TRANSFORMATION</div>
            <div className={getStepClassName(50)} onClick={() => onStepClick(50)}>EMERGIN TECHNOLOGIES</div>
            <div className={getStepClassName(75)} onClick={() => onStepClick(75)}>USEFUL TOOLS</div>
            <div className={getStepClassName(100)} onClick={() => onStepClick(100)}>DONE !</div>
          </div>
        </div>
      </div>
    );
}

export function MainNavPath({ stepProgress, onStepClick }) {
    const progressBarWidth = `${stepProgress}%`;

    const getStepClassName = (completionThreshold) => {
        return `cursor-pointer transition-colors duration-300 ${stepProgress >= completionThreshold ? "text-indigo-600" : "text-gray-600"} flex justify-center`;
    };

    return (
      <div>
        <div className="bg-slate-900 pb-4" aria-hidden="true">
          <div className="overflow-hidden rounded-full bg-slate-900">
            <div className="h-2 rounded-full bg-indigo-600 transition-all duration-300 ease-in-out" style={{ width: progressBarWidth }} />
          </div>
          <div className="mt-6 hidden grid-cols-4 text-sm font-medium sm:grid">
            <div className={getStepClassName(25)} onClick={() => onStepClick(25)}>Self reflection and strategies moving forward</div>
            <div className={getStepClassName(50)} onClick={() => onStepClick(50)}>Technology Assessment</div>
            <div className={getStepClassName(75)} onClick={() => onStepClick(75)}>Defining Target state and gaps</div>
            <div className={getStepClassName(100)} onClick={() => onStepClick(100)}>Prioritizing projects</div>
          </div>
        </div>
      </div>
    );
}
