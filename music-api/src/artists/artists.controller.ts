import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  createArtist(@Body() createArtistData: CreateArtistDto) {
    return this.artistsService.createArtist(createArtistData);
  }

  @Get()
  getAllArtist() {
    return this.artistsService.getAllArtists();
  }

  @Get(':id')
  getArtistById(@Param('id') id: string) {
    return this.artistsService.getArtistById(Number(id));
  }

  @Patch(':id')
  updateArtist(
    @Param('id') id: string,
    @Body() updateArtistData: UpdateArtistDto,
  ) {
    return this.artistsService.updateArtist(Number(id), updateArtistData);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteArtist(@Param('id') id: string) {
    return this.artistsService.deleteArtist(Number(id));
  }
}
