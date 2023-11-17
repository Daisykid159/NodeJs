const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 8000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const user = {
  uid: 1,
  name: "Lee Thi Thoa",
  sdt: "0981627212",
  point: 200,
};

const data = [
  {
    id: 1,
    name: "Bánh mì",
    price: 10000,
    quantity: 10,
  },
  {
    id: 2,
    name: "Bánh mì",
    price: 10000,
    quantity: 10,
  },
  {
    id: 3,
    name: "Bánh mì",
    price: 10000,
    quantity: 10,
  },
  {
    id: 4,
    name: "Bánh mì",
    price: 10000,
    quantity: 10,
  },
  {
    id: 5,
    name: "Bánh mì",
    price: 10000,
    quantity: 10,
  },
  {
    id: 6,
    name: "Bánh mì",
    price: 10000,
    quantity: 10,
  },
  {
    id: 7,
    name: "Bánh mì",
    price: 10000,
    quantity: 10,
  },
  {
    id: 8,
    name: "Bánh mì",
    price: 10000,
    quantity: 10,
  },
];

const listsp = [];

app.get("/api/user", (req, res) => {
  res.json(user);
});

app.get("/api/listsp", (req, res) => {
  res.json(data);
});

app.delete("/api/deletesp/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = data.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    data.splice(itemIndex, 1);
    res.sendStatus(204); // No Content (Xóa thành công)
  } else {
    res.status(404).json({ message: "Không tìm thấy phần tử với ID cụ thể." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
