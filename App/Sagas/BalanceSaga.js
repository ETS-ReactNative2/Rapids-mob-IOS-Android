import { put, call } from 'redux-saga/effects'
import BalanceActions from 'App/Stores/Balance/Actions'
import WalletActions from 'App/Stores/Wallet/Actions'
import { balanceService } from 'App/Services/BalanceService'

/**
 * A saga can contain multiple functions.
 *
 * This wallet saga contains only to create a wallet.
 */
export function* fetchBalance(action) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(BalanceActions.fetchBalanceLoading());

  // Fetch balance informations from an API
  const wallets = yield call(balanceService.fetchBalance, action.wallets);

  if (wallets && wallets.length) {
    yield put(BalanceActions.fetchBalanceSuccess(wallets));
    yield put(WalletActions.selectWallet(wallets && wallets.length ? wallets[0] : {} ));

  } else {
    yield put(
      BalanceActions.fetchBalanceFailure('There was an error while fetching balance.')
    );
  }
}


export function* fetchAddress(action) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(BalanceActions.fetchBalanceLoading());

  const address = yield call(balanceService.fetchAddress, action.addressInfo);
  console.log(address, 'address')

  if (address) {
    yield put(BalanceActions.fetchAddressSuccess(address));
  } else {
    yield put(
      BalanceActions.fetchAddressFailure('There was an error while fetching address.')
    );
  }

  // Fetch address informations from an API

}