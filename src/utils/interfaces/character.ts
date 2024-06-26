import { Episode } from './episode';
import { Location } from './location';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender?: string;
  origin: any;
  location: Location;
  image: string;
  episode: Array<string>;
  episode_detail: Episode;
}
