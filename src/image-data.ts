import img1 from './assets/images/image_b4c8cb03-dd3d-41d9-bda4-2205.png';
import img2 from './assets/images/transparent_102131.png';
import img3 from './assets/images/343bfbfc1a10a39a528a3d34367669c2_x0njjjmjekgekk4i.jpg';
import img4 from './assets/images/4825587187792-image-0_2.png';
import img5 from './assets/images/4603294711888-image-0_1.png';
import img6 from './assets/images/shoe_transparent_5613png.png';
import img7 from './assets/images/14-09-2020_ao9944-161_2_1-removebg-previewpng.png';
import img8 from './assets/images/7883dc186e15bf29dad696e1e989e914_w6uwxjupnvtenbvc.jpg';
import img9 from './assets/images/4e151d7b538e5aba66295f3a5d67b1f4_56utfrdccs2rteni.jpg';
import img10 from './assets/images/cd759395d74526f72c3b0c43c91b4220_ewu87esqyksyq9b9.jpg';
import img11 from './assets/images/44694ee386818f3276566210464cf341_4xf70asma4hp5tu2.jpg';
import img12 from './assets/images/23550440c4ccab05e4fc1ebd85e742cc_gw3jj4zmvycccn8x.jpg';
import img13 from './assets/images/fae150570c8ce6ddc4f787bf77b02c95_ynqo7ja9y3payoqf.jpg';

export type ProductType = {
  brand: string
  price: number
  isTop?: boolean
  imageUrl: string
  videoUrl: string
}
export const images: Array<ProductType> = [
  {
    brand: "Adidas",
    price: 799,
    imageUrl: img1,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Nike",
    price: 799,
    imageUrl: img2,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Asics",
    price: 799,
    isTop: true,
    imageUrl: img3,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Timberland",
    price: 799,
    imageUrl: img4,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Puma",
    price: 799,
    isTop: true,
    imageUrl: img5,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "New Balance",
    price: 799,
    imageUrl: img6,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Mizuno",
    price: 799,
    imageUrl: img7,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Converse",
    price: 799,
    isTop: true,
    imageUrl: img8,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Reebok",
    price: 799,
    imageUrl: img9,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Columbia",
    price: 799,
    imageUrl: img10,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Jordan",
    price: 799,
    imageUrl: img11,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Salomon",
    price: 799,
    isTop: true,
    imageUrl: img12,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  },
  {
    brand: "Lasocki",
    price: 799,
    imageUrl: img13,
    videoUrl: "https://cdn.lost.show/post-uploads/2ff1780b-44e1-4fa9-a2b7-9e66cf610f4f.mov"
  }
];
