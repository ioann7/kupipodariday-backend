import {
  IsDecimal,
  IsNotEmpty,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateWishDto {
  @Length(1, 250)
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  link: string;

  @IsUrl()
  @IsNotEmpty()
  image: string;

  @IsDecimal()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
