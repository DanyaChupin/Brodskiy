import axios from "axios";
import { IPayloadCourse } from "../types/type";

export const getToken = async () => {
  try {
    const { data } = await axios.get<IPayloadCourse>(
      "https://garantex.org/api/v2/depth?market=usdtrub",
    );
    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
};
