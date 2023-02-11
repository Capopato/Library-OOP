export const add30Days = (checkOutAt: Date): Date => {
  const date = checkOutAt;
  const expireDate = new Date(date.setDate(date.getDate() + 30));
  return expireDate;
};
