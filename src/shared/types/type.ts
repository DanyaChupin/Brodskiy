export interface IPayloadCourse {
  asks: ICourse[];
  bids: ICourse[];
}
export interface ICourse {
  amount: string;
  factor: string;
  price: string;
  type: string;
  volume: string;
}
