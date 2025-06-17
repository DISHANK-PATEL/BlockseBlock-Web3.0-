import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Loan {
  'status' : LoanStatus,
  'collateral' : bigint,
  'borrower' : string,
  'lender' : string,
  'amount' : bigint,
}
export type LoanStatus = { 'PaidBack' : null } |
  { 'Funded' : null } |
  { 'Requested' : null };
export type Result = { 'Ok' : null } |
  { 'Err' : string };
export interface _SERVICE {
  'fund_loan' : ActorMethod<[string, string], Result>,
  'get_loan' : ActorMethod<[string], [] | [Loan]>,
  'pay_back_loan' : ActorMethod<[string], Result>,
  'request_loan' : ActorMethod<[string, bigint, bigint], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
