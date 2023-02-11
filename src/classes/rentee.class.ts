export class Rentee {
  id: string;
  name: string;
  account: number;
  constructor(id: string, name: string, account: number = 0) {
    (this.id = id), (this.name = name), (this.account = account);
  }
}
