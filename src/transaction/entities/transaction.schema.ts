import { mongoose, Schema } from 'src/config/database';
import { ITransaction } from './transaction.interface';

const transactionSchema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: 'Employee',
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

export default mongoose.model<ITransaction>('Transaction', transactionSchema);
