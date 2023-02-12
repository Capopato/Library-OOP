"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    constructor(id, name, accountBalance = 0) {
        (this.id = id), (this.name = name), (this.accountBalance = accountBalance);
    }
    payFine() { }
}
exports.Member = Member;
