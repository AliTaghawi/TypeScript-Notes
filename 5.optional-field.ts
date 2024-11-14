// optional field
function sayHi(name?: string) {
  console.log(`hello ${name || "user"}`);
}

sayHi();

let blog: {
  title: string;
  text: string;
  likes: number;
  comments?: Array<object>; // optional
} = {
  title: "blog1",
  text: "some blog text for test",
  likes: 10,
};
