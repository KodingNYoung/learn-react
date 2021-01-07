import {  dishes } from "../shared/Db";
import { comments } from "../shared/comments";
import { leaders } from "../shared/leaders";
import { promotions } from "../shared/promotions";

export const initialState = {
  dishes: dishes,
  comments: comments,
  leaders: leaders,
  promotions: promotions,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
