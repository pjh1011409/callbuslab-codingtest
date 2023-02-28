export interface InputState {
  RentalType: string;
  Deposit: string;
  MontlyRent: string;
  MontlyFee: string;
  PaymentDate: string;
  Address: string;
  RoomNumber: string;
  TenantName: string;
  StartDate: string;
  EndDate: string;
  Phone: string;
}

export interface RentalInputProps {
  isClickedCharter: boolean;
  isClickedMontly: boolean;
}
