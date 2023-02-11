"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rentee = void 0;
class Rentee {
    constructor(id, name, account = 0) {
        (this.id = id), (this.name = name), (this.account = account);
    }
}
exports.Rentee = Rentee;
