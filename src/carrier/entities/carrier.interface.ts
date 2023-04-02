import mongoose, { Document } from 'mongoose';
import { IShipment } from 'src/shipment/entities/shipment.interface';
import { ITransaction } from 'src/transaction/entities/transaction.interface';

export interface ICarrier extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  shipmentsCostHistory: number;
  shipments: IShipment[];
  shipmentsCount: number;
  totalShipmentsCost: number;
  transactions: ITransaction[];
  transactionsCount: number;
  totalTransactionAmount: number;
  balance: number;
}
