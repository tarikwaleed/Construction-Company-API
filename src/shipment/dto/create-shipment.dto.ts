import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateShipmentDto {
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsNotEmpty()
  @IsString()
  supplier: string;

  @IsNotEmpty()
  @IsString()
  customer: string;

  @IsNotEmpty()
  @IsString()
  material: string;

  @IsNotEmpty()
  @IsNumber()
  carriage_price: number;

  @IsNotEmpty()
  @IsNumber()
  material_price: number;

  @IsNotEmpty()
  @IsString()
  driver_name: string;

  @IsNotEmpty()
  @IsString()
  vehicle_number: string;

  @IsNotEmpty()
  @IsString()
  cart_number: string;

  @IsNotEmpty()
  @IsNumber()
  vehicle_volume: number;

  @IsNotEmpty()
  @IsString()
  carrier: string;
}
