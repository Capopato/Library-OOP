export const add30Days = (checkOutDate: Date): Date => {
  const date = checkOutDate;
  const expireDate = new Date(date.setDate(date.getDate() + 30));
  return expireDate;
};
