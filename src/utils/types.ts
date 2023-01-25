export interface CryptoDataResponse {
  Response: string;
  Message: string;
  HasWarning: boolean;
  Type: number;
  RateLimit: object;
  Data: {
    Aggregated: boolean;
    TimeFrom: number;
    TimeTo: number;
    Data: CryptoData[];
  };
}

export interface CryptoData {
  time: number;
  high: number;
  low: number;
  open: number;
  volumefrom: number;
  volumeto: number;
  close: number;
  conversionType: string;
  conversionSymbol: string;
}

export interface Props {
  data: CryptoDataResponse;
}
