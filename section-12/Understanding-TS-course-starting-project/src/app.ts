import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

const products = [
  {
    title: "本",
    price: 100,
  },
  {
    title: "ノート",
    price: 200,
  },
];

const newProd = new Product("", -5.99);
console.log(newProd.getInformation());

const loadedProduct = plainToClass(Product, products);
console.log(loadedProduct);

validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("入力情報にエラーがあります");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
