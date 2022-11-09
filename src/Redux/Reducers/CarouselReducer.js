import { DS_BANER } from "../action/Type/CarouselType";

const initialState = {
  mangBanner: [],
};
export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DS_BANER:
      state.mangBanner = [...action.arrayBanner];
      return { ...state };
    default:
      return state;
  }
};
