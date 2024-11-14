// anonymous types
let product: { title: string; price: number; quantity: number } = {
  title: "product1",
  price: 200,
  quantity: 2,
};

const products: Array<typeof product> = [
  { title: "product1", price: 50, quantity: 1 },
  { title: "product2", price: 10, quantity: 20 },
];
