import { v4 as uuid } from "uuid";

export const addId = () => {
  const renteeId = uuid();
  return renteeId;
};
