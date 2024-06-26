import { Episode } from './episode';
import { Location } from './location';

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender?: string;
  origin: object;
  location: Location;
  image: string;
  episode: Array<string>;
  episode_detail: Episode;
  residents?: Array<string>;
  dimension?: string;
  created?: string;
  air_date?: string;
  characters?: Array<string>;
  compared?: boolean;
  disabled?: boolean;
}
