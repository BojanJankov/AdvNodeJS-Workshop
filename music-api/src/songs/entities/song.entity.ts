import { Artist } from 'src/artists/entities/artist.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column()
  year: string;

  @Column()
  genre: string;

  @ManyToOne(() => Artist, (artist) => artist.songs)
  @JoinColumn()
  artist: Artist;
}
