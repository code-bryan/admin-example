/* eslint-disable import/no-anonymous-default-export */
import { BodyOne, BodyTwo } from "./body";
import HeadingOne from "./heading";

export type BaseTextProps = {
  text: string;
  className?: string;
};

export default {
  HeadingOne,
  BodyOne,
  BodyTwo,
};