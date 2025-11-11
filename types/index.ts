
export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

export interface Professional {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  phone: string;
  isFavorite: boolean;
  imageUrl: string;
  reviews: Review[];
}

export interface Tool {
  id: number;
  name: string;
  pricePerDay: number;
  available: boolean;
  imageUrl: string;
}

export enum Page {
  HOME,
  PROFESSIONALS,
  TOOLS,
  PROFILE,
}
