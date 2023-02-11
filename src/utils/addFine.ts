/**
 * Calculate difference expiresOn date and the current Date
 * for every missed date €1 fine
 */
export const addFine = (expiresOn: Date) => {
  const totalFine = Date.now() - Number(expiresOn);
  return totalFine;
};
