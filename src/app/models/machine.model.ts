export class Machine {
  id: string;
  hostname: string;
  ip_address: string;
  program: string;
  is_qualified: string;

  constructor(id, hostname, ip_address, program, is_qualified) {
    this.id = id;
    this.hostname = hostname;
    this.ip_address = ip_address;
    this.program = program;
    this.is_qualified = is_qualified;
  }
}
