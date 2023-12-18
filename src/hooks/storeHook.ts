import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootSate } from "../store";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector;
