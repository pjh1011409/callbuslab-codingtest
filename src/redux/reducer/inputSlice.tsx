import { createSlice } from '@reduxjs/toolkit';
import { InputState } from '../../types/type';

const initialState: InputState = {
  RentalType: '', // 전세 or 월세
  Deposit: '', // 보증금
  MontlyRent: '', // 월 임대료
  MontlyFee: '', // 월 관리비
  PaymentDate: '', // 임대료 납부일
  Address: '', // 건물주소,
  RoomNumber: '', // 호실
  TenantName: '', // 세입자 이름
  StartDate: '', // 계약시작일
  EndDate: '', // 계약종료일
  Phone: '', // 번호
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setRentalType: (state, action) => {
      state.RentalType = action.payload;
    },
    setDeposit: (state, action) => {
      state.Deposit = action.payload;
    },
    setMontlyRent: (state, action) => {
      state.MontlyRent = action.payload;
    },
    setMontlyFee: (state, action) => {
      state.MontlyFee = action.payload;
    },
    setPaymentDate: (state, action) => {
      state.PaymentDate = action.payload;
    },
    setAddress: (state, action) => {
      state.Address = action.payload;
    },
    setRoomNumber: (state, action) => {
      state.RoomNumber = action.payload;
    },
    setTanantName: (state, action) => {
      state.TenantName = action.payload;
    },
    setStartDate: (state, action) => {
      state.StartDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.EndDate = action.payload;
    },
    setPhone: (state, action) => {
      state.Phone = action.payload;
    },
  },
});

export const {
  setRentalType,
  setDeposit,
  setMontlyRent,
  setMontlyFee,
  setPaymentDate,
  setAddress,
  setRoomNumber,
  setTanantName,
  setStartDate,
  setEndDate,
  setPhone,
} = inputSlice.actions;

export default inputSlice.reducer;
