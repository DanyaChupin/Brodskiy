import axios from "axios";
import { IPayloadCourse } from "../types/type";

export const getToken = async () => {
  try {
    const { data } = await axios.get<IPayloadCourse>(
      "https://garantex.org/api/v2/depth?market=usdtrub",
    );
    return data;
    /*eslint-disable*/
    // @ts-ignore
  } catch (e) {
    return false;
  }
};
