import mongoose from 'mongoose';
import { ICarrier } from 'src/carrier/entities/carrier.interface';
export interface ITransaction {
  date: Date;
  type: string;
  employee: string;
  carrier: mongoose.Types.ObjectId | ICarrier;
  receiver_name: string;
  amount: number;
  extra_fees: number;
}
