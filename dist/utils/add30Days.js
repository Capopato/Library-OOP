"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add30Days = void 0;
const add30Days = (checkOutAt) => {
    const date = checkOutAt;
    const expireDate = new Date(date.setDate(date.getDate() + 30));
    return expireDate;
};
exports.add30Days = add30Days;
