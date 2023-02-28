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

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface OnChangeFirstProps {
  onChangeAddress: (e: InputChangeEvent) => void;
  setAddressAPI: React.Dispatch<React.SetStateAction<string>>;
}

export interface OnChangeSecondProps {
  onChangeRoomNumber: (e: InputChangeEvent) => void;
  onChangeTanantName: (e: InputChangeEvent) => void;
}

export interface OnChangeThirdProps {
  onChangeStartDate: (e: InputChangeEvent) => void;
  onChangeEndDate: (e: InputChangeEvent) => void;
}

export interface OnChangeFourthProps {
  onChangePhone: (e: InputChangeEvent) => void;
}

export interface RentalInputProps {
  isClickedCharter: boolean;
  isClickedMontly: boolean;
}
