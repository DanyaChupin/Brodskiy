import axios from "axios";
import { IPayloadCourse } from "../types/type";

export const getToken = async () => {
  try {
    const amountRes = await axios.get<IPayloadCourse>(
      "https://api.coinbase.com/v2/prices/USDT-RUB/spot",
    );
    if (amountRes?.data?.data?.amount) {
      const buyRes = (Number(amountRes.data.data.amount) * 1.0025).toFixed(2); // 0.25% = 1.0025
      const sallRes = (Number(amountRes.data.data.amount) * 0.9975).toFixed(2);
      return {
        buy: buyRes,
        sall: sallRes,
      };
    } else {
      return {
        buy: null,
        sall: null,
      };
    }
    /*eslint-disable*/
    // @ts-ignore
  } catch (e) {
    return false;
  }
};
