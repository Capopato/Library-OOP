"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addId = void 0;
const uuid_1 = require("uuid");
const addId = () => {
    const renteeId = (0, uuid_1.v4)();
    return renteeId;
};
exports.addId = addId;
