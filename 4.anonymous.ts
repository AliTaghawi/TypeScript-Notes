// anonymous types
let product: { title: string; price: number; quantity: number } = {
  title: "product1",
  price: 200,
  quantity: 2,
};

let products: Array<typeof product>;
let payment: { productAmount: number; gateway: string };

let basket: { products: typeof products; payment: typeof payment } = {
  products: [{ title: "product1", price: 50, quantity: 1 }],
  payment: { productAmount: 1, gateway: "zarrinPall" },
};
// const products: Array<typeof product> = [
//   { title: "product1", price: 50, quantity: 1 },
//   { title: "product2", price: 10, quantity: 20 },
// ];
