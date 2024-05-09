import { Artist } from 'src/artists/entities/artist.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  artistId: number;

  @Column()
  year: string;

  @Column()
  numberOfSales: number;

  @ManyToOne(() => Artist, (artist) => artist.albums)
  @JoinColumn({ name: 'artistId' })
  artist: Artist;
}
