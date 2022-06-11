export class Operating {
  token: string;
  value: string;
  operator: string;
  constructor(_token: string, _vale: string, _operator: string) {
    this.token = _token;
    this.value = _vale;
    this.operator = _operator;
  }
}
