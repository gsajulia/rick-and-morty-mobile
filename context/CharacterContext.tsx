import React, { createContext, useReducer, ReactNode } from "react";
import { TCharacter } from "../globalTypes";

interface State {
    characters: TCharacter[];
}

type Action = { type: "SET_CHARACTERS"; payload: TCharacter[] };

type Dispatch = (action: Action) => void;

const initialState: State = {
    characters: [],
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_CHARACTERS":
            return { ...state, characters: action.payload };
        default:
            return state;
    }
};

export const CharactersContext = createContext<
    | {
          state: State;
          dispatch: Dispatch;
      }
    | undefined
>({ state: initialState, dispatch: () => {} });

export const CharactersProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CharactersContext.Provider value={{ state, dispatch }}>
            {children}
        </CharactersContext.Provider>
    );
};
