import { useReducer } from "react";


interface IModal {
  open: boolean,
  id: number | null
}

interface IModalAction {
  type: string,
  payload: any | null
}

const modalReducerAction = (state: IModal, action: IModalAction) => {
  const { type, payload } = action;

  switch (type) {
    case "OPEN":
      return {
        ...state,
        open: true,
        id: payload
      };
    case "CLOSE":
      return {
        ...state,
        open: false,
        id: null
      }
    default:
      return state;
  }
}

const useModal = () => useReducer(modalReducerAction, {
  open: false,
  id: null
});

export default useModal;