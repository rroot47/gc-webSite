export interface MemberModel{
  currentPage:   number;
  totalPages:    number;
  pageSize:      number;
  memberDTOS: MemberDTO[];
}

export interface MemberDTO{
  id:              number;
  firstName:          string;
  lastName:             string;
  phone:       number;
  domicile:        string;
  amountMembership: number;
  membershipDTOS: MembershiptDTO[];
  totalMount:   number;
}

export interface MembershiptDTO{
  year:   number;
  mount: number;
}
