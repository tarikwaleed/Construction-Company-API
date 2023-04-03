import { Model, Types } from 'mongoose';
import { CreateCarrierDto } from './dto/create-carrier.dto';
import { ICarrier } from './entities/carrier.interface';
import { InjectModel } from '@nestjs/mongoose';

export class CarrierRepository {
  constructor(
    @InjectModel('Carrier') private readonly carrierModel: Model<ICarrier>,
  ) {}

  async create(createCarrierDto: CreateCarrierDto): Promise<ICarrier> {
    const createdCarrier = new this.carrierModel(createCarrierDto);
    return createdCarrier.save();
  }

  async findAll(): Promise<ICarrier[]> {
    return this.carrierModel
      .find()
      .populate('shipments')
      .populate('transactions')
      .exec();
  }

  async findOne(id: string): Promise<ICarrier> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    return this.carrierModel
      .findById(id)
      .populate('shipments')
      .populate('transactions')
      .exec();
  }

  async update(
    id: string,
    createCarrierDto: CreateCarrierDto,
  ): Promise<ICarrier> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    return this.carrierModel
      .findByIdAndUpdate(id, createCarrierDto, { new: true })
      .populate('shipments')
      .populate('transactions')
      .exec();
  }

  async delete(id: string): Promise<ICarrier> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    return this.carrierModel
      .findByIdAndRemove(id)
      .populate('shipments')
      .populate('transactions')
      .exec();
  }
}
