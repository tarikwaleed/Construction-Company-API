import { Schema } from 'mongoose';
import { ITransaction } from './transaction.interface';

export const transactionSchema = new Schema<ITransaction>(
  {
    date: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    employee: {
      type: String,
      required: true,
    },
    carrier: {
      type: Schema.Types.ObjectId,
      ref: 'Carrier',
      required: true,
    },
    receiver_name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    extra_fees: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
