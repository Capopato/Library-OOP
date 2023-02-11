"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFine = void 0;
/**
 * Calculate difference expiresOn date and the current Date
 * for every missed date €1 fine
 */
const addFine = (expiresOn) => {
    const totalFine = Date.now() - Number(expiresOn);
    return totalFine;
};
exports.addFine = addFine;
