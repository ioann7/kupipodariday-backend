import { PartialType } from '@nestjs/swagger';
import {
  IsDecimal,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { CreateWishDto } from './create-wish.dto';

export class UpdateWishDto extends PartialType(CreateWishDto) {
  @Length(1, 250)
  @IsOptional()
  name: string;

  @IsUrl()
  @IsOptional()
  link: string;

  @IsUrl()
  @IsOptional()
  image: string;

  @IsDecimal()
  @IsOptional()
  price: string;

  @IsString()
  @IsOptional()
  description: string;
}
