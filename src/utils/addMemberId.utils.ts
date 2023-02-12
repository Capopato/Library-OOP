import { v4 as uuid } from "uuid";

export const addId = (): string => {
  return uuid();
};
