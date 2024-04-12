export class MemberModel {
  constructor(
    public  currentPage: number,
    public totalPages: number,
    public pageSize: number,
    public members: members[]
  ) {
  }
}

export interface members {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  domicile: string;
  amountMembership: number;
  membership: membership[];
  totalMount: number;
}

export interface membership {
  year: number;
  mount: number;
}
