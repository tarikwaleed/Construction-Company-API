import { Injectable } from '@nestjs/common';
import { CreateCarrierDto } from './dto/create-carrier.dto';
import { UpdateCarrierDto } from './dto/update-carrier.dto';
import { CarrierRepository } from './carrier.repository';
import { ICarrier } from './entities/carrier.interface';

@Injectable()
export class CarrierService {
  constructor(private readonly carrierRepository: CarrierRepository) {}
  async create(createCarrierDto: CreateCarrierDto): Promise<ICarrier> {
    const newCarrier = await this.carrierRepository.create(createCarrierDto);
    return newCarrier;
  }

  findAll() {
    return `This action returns all carrier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carrier`;
  }

  update(id: number, updateCarrierDto: UpdateCarrierDto) {
    return `This action updates a #${id} carrier`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrier`;
  }
}
