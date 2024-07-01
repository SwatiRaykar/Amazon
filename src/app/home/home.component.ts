import { Component } from '@angular/core';
// interface Product{
//   id: number;
//   imageURL:string;
//   name: string;
//   description: string;
//   price: number;
//   marketPrice:number,
//   NOofRatings:number,
//   TotalBuyCustomers:number
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // products: Product[] = [
  //   { id: 1, imageURL:'https://m.media-amazon.com/images/I/61pCckLFszL._AC_UY327_FMwebp_QL65_.jpg',name: 'Redmi Note 12 Pro 5G (Onyx Black, 8GB RAM, 256GB Storage)',  description: 'Description of Product 3', price:25990  ,marketPrice:31999,NOofRatings:6,TotalBuyCustomers:201},
  //   { id: 2, imageURL:'https://m.media-amazon.com/images/I/61VbKHdE0rL._AC_UY327_FMwebp_QL65_.jpg',name: 'iQOO Z6 Lite 5G (Stellar Green, 6GB RAM, 128GB Storage) with Charger | Qualcomm Snapdragon 4 Gen 1 Processor | 120Hz FHD+ Display | Travel Adaptor Included in The Box',  description: 'Description of Product 3', price:15990  ,marketPrice:18999,NOofRatings:15,TotalBuyCustomers:321},
  //   { id: 3, imageURL:'https://m.media-amazon.com/images/I/810HI-4wV+L._AC_UY327_FMwebp_QL65_.jpg',name: 'Oppo F25 Pro 5G (Lava Red, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers  ',  description: 'Description of Product 3', price: 15990 ,marketPrice:18999,NOofRatings:112,TotalBuyCustomers:311},
  //   { id: 4,imageURL:'https://m.media-amazon.com/images/I/71-ZHpmFzDL._AC_UY327_FMwebp_QL65_.jpg', name: 'realme NARZO 70 Pro 5G (Glass Green, 8GB RAM,128GB Storage) Dimensity 7050 5G Chipset | Horizon Glass Design | Segment 1st Flagship Sony IMX890 OIS Camera  ', description: 'Description of Product 2', price:19999  ,marketPrice:24999,NOofRatings:32,TotalBuyCustomers:231},
  //   { id: 5,imageURL:'https://m.media-amazon.com/images/I/61vxwwIEnXL._AC_UY327_FMwebp_QL65_.jpg', name: 'Vivo V30e 5G Smartphone (Velvet Red, 8GB RAM, 128GB Storage)  ', description: 'Description of Product 2', price: 26970 ,marketPrice:32999,NOofRatings:112,TotalBuyCustomers:128},
  //   { id: 6,imageURL:'https://m.media-amazon.com/images/I/51bhHLcul5L._AC_UY327_FMwebp_QL65_.jpg', name: 'Vivo Y200 5G Mobile (Jungle Green, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers  ', description: 'Description of Product 2', price: 22999 ,marketPrice:28999,NOofRatings:102,TotalBuyCustomers:142},
  //   { id: 7,imageURL:'https://m.media-amazon.com/images/I/71JwBmU9nFL._AC_UY327_FMwebp_QL65_.jpg', name: 'Vivo T2 Pro 5G (New Moon Black, 128 GB) (8 GB RAM)  ', description: 'Description of Product 2', price: 22999 ,marketPrice:26999,NOofRatings:12,TotalBuyCustomers:102},
  //   { id: 8,imageURL:'https://m.media-amazon.com/images/I/716fAVud8PL._AC_UY327_FMwebp_QL65_.jpg', name: 'Apple iPhone 14 Plus (128 GB) - (PRODUCT) RED  ', description: 'Description of Product 2', price: 64999 ,marketPrice:79990,NOofRatings:1002,TotalBuyCustomers:1202},
  //   { id: 9,imageURL:'https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg', name: 'Apple iPhone 15 (128 GB) - Black  ', description: 'Description of Product 2', price:71999  ,marketPrice:79900,NOofRatings:102,TotalBuyCustomers:210},
  //   { id: 10,imageURL:'https://m.media-amazon.com/images/I/61pCckLFszL._AC_UY327_FMwebp_QL65_.jpg', name: 'Redmi Note 12 Pro 5G (Onyx Black, 16GB RAM, 256GB Storage)', description: 'Description of Product 2', price:25990  ,marketPrice:31999,NOofRatings:8,TotalBuyCustomers:201},
  //   { id: 11,imageURL:'https://m.media-amazon.com/images/I/61VbKHdE0rL._AC_UY327_FMwebp_QL65_.jpg', name: 'iQOO Z6 Lite 5G (Stellar Green, 8GB RAM, 128GB Storage) with Charger | Qualcomm Snapdragon 4 Gen 1 Processor | 120Hz FHD+ Display | Travel Adaptor Included in The Box', description: 'Description of Product 2', price: 15990 ,marketPrice:18999,NOofRatings:16,TotalBuyCustomers:321},
  //   { id: 12, imageURL:'https://m.media-amazon.com/images/I/810HI-4wV+L._AC_UY327_FMwebp_QL65_.jpg',name: 'Oppo F25 Pro 5G (Lava Red, 16GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers  ',  description: 'Description of Product 3', price: 15990 ,marketPrice:18999,NOofRatings:112,TotalBuyCustomers:311},
  //   { id: 13, imageURL:'https://m.media-amazon.com/images/I/71-ZHpmFzDL._AC_UY327_FMwebp_QL65_.jpg',name: 'realme NARZO 70 Pro 5G (Glass Green, 128GB RAM,128GB Storage) Dimensity 7050 5G Chipset | Horizon Glass Design | Segment 1st Flagship Sony IMX890 OIS Camera  ',  description: 'Description of Product 3', price: 19999 ,marketPrice:24999,NOofRatings:32,TotalBuyCustomers:231},
  //   { id: 14,imageURL:'https://m.media-amazon.com/images/I/61vxwwIEnXL._AC_UY327_FMwebp_QL65_.jpg', name: 'Vivo V30e 5G Smartphone (Velvet Red, 16GB RAM, 128GB Storage)  ', description: 'Description of Product 2', price:26970  ,marketPrice:32999,NOofRatings:112,TotalBuyCustomers:128},
  //   { id: 15,imageURL:'https://m.media-amazon.com/images/I/51bhHLcul5L._AC_UY327_FMwebp_QL65_.jpg', name: 'Vivo Y200 5G Mobile (Jungle Green, 128GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers  ', description: 'Description of Product 2', price: 22999 ,marketPrice:28999,NOofRatings:102,TotalBuyCustomers:142},
  //   { id: 16,imageURL:'https://m.media-amazon.com/images/I/71JwBmU9nFL._AC_UY327_FMwebp_QL65_.jpg', name: 'Vivo T2 Pro 5G (New Moon Black, 128 GB) (16 GB RAM)  ', description: 'Description of Product 2', price: 22999 ,marketPrice:26999,NOofRatings:12,TotalBuyCustomers:102},
  //   { id: 17,imageURL:'https://m.media-amazon.com/images/I/716fAVud8PL._AC_UY327_FMwebp_QL65_.jpg', name: 'Apple iPhone 13 Plus (128 GB) - (PRODUCT) RED  ', description: 'Description of Product 2', price:64999  ,marketPrice:79990,NOofRatings:1002,TotalBuyCustomers:2102},
  //   { id: 18, imageURL:'https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg',name: 'Apple iPhone 15 (128 GB) - Black  ',  description: 'Description of Product 3', price: 71999 ,marketPrice:79900,NOofRatings:102,TotalBuyCustomers:210}


  // ];
}
