import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumsService {
  constructor(@InjectRepository(Album) private albumsRepo: Repository<Album>) {}
  create(createAlbumDto: CreateAlbumDto) {
    const newAlbum = this.albumsRepo.create({
      ...createAlbumDto,
      artist: { id: createAlbumDto.artistId },
    });
  }

  findAll() {
    return this.albumsRepo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} album`;
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
