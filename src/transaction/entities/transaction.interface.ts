import mongoose from 'mongoose';
import { ICarrier } from 'src/carrier/entities/carrier.interface';
import { IEmployee } from 'src/employee/entities/employee.interface';

export interface ITransaction {
  _id: mongoose.Types.ObjectId;
  date: Date;
  type: string;
  employee: mongoose.Types.ObjectId | IEmployee;
  carrier: mongoose.Types.ObjectId | ICarrier;
  receiver_name: string;
  amount: number;
  extra_fees: number;
}
