import { MemberModel } from "../models/member.model";

export class Member implements MemberModel {
  id: string;
  name: string;
  accountBalance: number;
  constructor(id: string, name: string, accountBalance: number = 0) {
    (this.id = id), (this.name = name), (this.accountBalance = accountBalance);
  }
  payFine() {}
}
