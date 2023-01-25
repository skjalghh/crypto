interface CryptoData {
  Response: string;
  Message: string;
  HasWarning: boolean;
  Type: number;
  RateLimit: object;
  Data: {
    Aggregated: boolean;
    TimeFrom: number;
    TimeTo: number;
    Data: [
      {
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
    ];
  };
}

interface Props {
  data: CryptoData[];
}

import axios from "axios";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await axios.get(
    "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2"
  );
  const data = res.data;

  console.log(data);

  return {
    props: {
      data,
    },
  };
};
