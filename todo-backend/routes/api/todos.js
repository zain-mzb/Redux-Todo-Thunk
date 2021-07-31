const express = require("express");
let router = express.Router();
var { Todo } = require("../../models/todo");

//get products

router.get("/", async (req, res) => {
  
    // console.log(req.user);
    // let page = Number(req.query.page ? req.query.page : 1);
    // let perPage = Number(req.query.perPage ? req.query.perPage : 10);
    // let skipRecords = perPage * (page - 1);
    let todos = await Todo.find();
   
  //  return res.send({ todos });
  return res.send(todos);

  });
  
  //get single products
//   router.get("/:id", async (req, res) => {
//     try {
//       let product = await Product.findById(req.params.id);
//       if (!product)
//         return res.status(400).send("Product With given ID is not present"); //when id is not present id db
//       return res.send(product); //everything is ok
//     } catch (err) {
//       return res.status(400).send("Invalid ID"); // format of id is not correct
//     }
//   });


  //update a record
//   router.put("/:id", async (req, res) => {
//     let product = await Product.findById(req.params.id);
//     product.name = req.body.name;
//     product.price = req.body.price;`
//     await product.save();
//     return res.send(product);
//   });


  //delete a record
  // router.delete("/:id",async (req, res) => {
  //   let todo = await Todo.findByIdAndDelete(req.params.id);
  //   return res.send(todo);
  // });

  // Insert a record
  router.post("/", async (req, res) => {
    let todo = new Todo();
    todo.todo = req.body.todo;
    console.log("req.body: ", req.body)
    await todo.save();
    console.log("todo.save: " , todo);
    return res.send(todo);
  });
  module.exports = router;
  