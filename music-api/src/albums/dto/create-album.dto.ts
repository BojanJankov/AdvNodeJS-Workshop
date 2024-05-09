import { IsNumber, IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  title: string;

  @IsString()
  genre: string;

  @IsNumber()
  artistId: number;

  @IsString()
  year: string;

  @IsNumber()
  numberOfSales: number;
}
