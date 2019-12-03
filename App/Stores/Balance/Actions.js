import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // Fetch Address
  fetchAddress: ['addressInfo'],
  //fetch Balance informations
  fetchBalance: ['wallets'],
  // The operation has started and is loading
  fetchBalanceLoading: null,
  // Address informations were successfully fetched
  fetchAddressSuccess: ['address'],
  // Balance informations were successfully fetched
  fetchBalanceSuccess: ['wallets'],
  // An error occurred
  fetchBalanceFailure: ['errorMessage'],
  // An error occurred
  fetchAddressFailure: ['errorMessage'],
  //reset Balance
  resetBalance: null
});

export const BalanceTypes = Types;
export default Creators;
