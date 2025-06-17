export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  const LoanStatus = IDL.Variant({
    'PaidBack' : IDL.Null,
    'Funded' : IDL.Null,
    'Requested' : IDL.Null,
  });
  const Loan = IDL.Record({
    'status' : LoanStatus,
    'collateral' : IDL.Nat64,
    'borrower' : IDL.Text,
    'lender' : IDL.Text,
    'amount' : IDL.Nat64,
  });
  return IDL.Service({
    'fund_loan' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'get_loan' : IDL.Func([IDL.Text], [IDL.Opt(Loan)], ['query']),
    'pay_back_loan' : IDL.Func([IDL.Text], [Result], []),
    'request_loan' : IDL.Func([IDL.Text, IDL.Nat64, IDL.Nat64], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
