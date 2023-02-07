import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex justify-center">
      <div className="mb-2 flex-col">
        <h4 className="mb-2">Count: {state.count}</h4>
        <button
          className="mr-2 h-[2.5rem] w-[8rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
          onClick={() => dispatch({ type: "increment", payload: 10 })}
        >
          Increment 10
        </button>
        <button
          className="mr-2 h-[2.5rem] w-[8rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
          onClick={() => dispatch({ type: "decrement", payload: 10 })}
        >
          Decrement 10
        </button>
        <button
          className="mr-2 h-[2.5rem] w-[8rem] rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-400"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
