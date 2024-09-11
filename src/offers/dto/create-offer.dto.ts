import { IsDecimal, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty()
  @IsDecimal()
  amount: string;

  @IsOptional()
  hidden: boolean;

  @IsNotEmpty()
  itemId: number;
}
