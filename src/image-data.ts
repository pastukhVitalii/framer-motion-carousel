import img1 from './assets/image_b4c8cb03-dd3d-41d9-bda4-2205.png';
import img2 from './assets/transparent_102131.png';
import img3 from './assets/343bfbfc1a10a39a528a3d34367669c2_x0njjjmjekgekk4i.jpg';
import img4 from './assets/4825587187792-image-0_2.png';
import img5 from './assets/4603294711888-image-0_1.png';
import img6 from './assets/shoe_transparent_5613png.png';
import img7 from './assets/14-09-2020_ao9944-161_2_1-removebg-previewpng.png';
import img8 from './assets/7883dc186e15bf29dad696e1e989e914_w6uwxjupnvtenbvc.jpg';
import img9 from './assets/4e151d7b538e5aba66295f3a5d67b1f4_56utfrdccs2rteni.jpg';
import img10 from './assets/cd759395d74526f72c3b0c43c91b4220_ewu87esqyksyq9b9.jpg';
import img11 from './assets/44694ee386818f3276566210464cf341_4xf70asma4hp5tu2.jpg';
import img12 from './assets/23550440c4ccab05e4fc1ebd85e742cc_gw3jj4zmvycccn8x.jpg';
import img13 from './assets/fae150570c8ce6ddc4f787bf77b02c95_ynqo7ja9y3payoqf.jpg';

export type ProductType = {
  brand: string
  price: number
  isTop?: boolean
  url: string
}
export const images: Array<ProductType> = [
  {
    brand: "Adidas",
    price: 799,
    url: img1
  },
  {
    brand: "Nike",
    price: 799,
    url: img2
  },
  {
    brand: "Asics",
    price: 799,
    isTop: true,
    url: img3
  },
  {
    brand: "Timberland",
    price: 799,
    url: img4
  },
  {
    brand: "Puma",
    price: 799,
    isTop: true,
    url: img5
  },
  {
    brand: "New Balance",
    price: 799,
    url: img6
  },
  {
    brand: "Mizuno",
    price: 799,
    url: img7
  },
  {
    brand: "Converse",
    price: 799,
    isTop: true,
    url: img8
  },
  {
    brand: "Reebok",
    price: 799,
    url: img9
  },
  {
    brand: "Columbia",
    price: 799,
    url: img10
  },
  {
    brand: "Jordan",
    price: 799,
    url: img11
  },
  {
    brand: "Salomon",
    price: 799,
    isTop: true,
    url: img12
  },
  {
    brand: "Lasocki",
    price: 799,
    url: img13
  }
];
