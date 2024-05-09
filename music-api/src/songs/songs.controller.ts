import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dtos/create-song.dto';
import { UpdateSongDto } from './dtos/update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  getAllSongs() {
    return this.songsService.getAllSongs();
  }

  @Get('/:id')
  getSongById(@Param('id') id: string) {
    return this.songsService.getSongById(Number(id));
  }

  @Post()
  createSong(@Body() crateSongData: CreateSongDto) {
    return this.songsService.createSong(crateSongData);
  }

  @Patch('/:id')
  updateSong(@Param('id') id: string, @Body() updateSongData: UpdateSongDto) {
    return this.songsService.updateSong(Number(id), updateSongData);
  }

  @Delete('/:id')
  deleteSong(@Param('id') id: string) {
    return this.songsService.deleteSong(Number(id));
  }
}
