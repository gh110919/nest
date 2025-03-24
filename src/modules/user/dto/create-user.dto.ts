import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsInt,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  firstName: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  lastName: string;

  @IsInt()
  @Min(18)
  age: number;
}
