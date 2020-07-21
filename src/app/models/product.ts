export class Product {
  public rating: number;
  public availble: boolean;
  public imageUrl: string;

  constructor(public code: string, public name: string, public price: number) {}
}
