export interface Recipe {
  id?: string;
  name: string;
  stars?: number;
  difficulty: number;
  description?: string;
  calories?: number;
  type?: string;
  time?: number;
  image?: string;
}
