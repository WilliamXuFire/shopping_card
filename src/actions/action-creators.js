import * as Types from './action-types'

export const setData = (payload) => ({
  type: Types.SET_DATA,
  payload: payload
})

export const setDetailsCheck = () => ({
  type: Types.SET_DETAILS_CHECK,
})

export const setPromoCheck = () => ({
  type: Types.SET_PROMO_CHECK,
})

export const setDiscountCode = (payload) => ({
  type: Types.SET_DISCOUNT_CODE,
  payload: payload
})

export const submitDiscountCode = () => ({
  type: Types.SUBMIT_DISCOUNT_CODE
})


