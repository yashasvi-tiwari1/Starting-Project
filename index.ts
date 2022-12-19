import express from "express";
import bodyParser from "body-parser";
const cors = require("cors");
let id =0;
const app = express();
const port = 4000;
let array: any = [];
// let data = {};
app.use(cors());
app.use(bodyParser.json());

app.post("/", function (req: any, res: any) {
  id += 1;
  const data = {
    id: id,
    description: req.body.description
  };
  array.push(data);
  res.send(data);
  console.log(array);
});
app.get("/", (req: any, res: any) => {
  res.send(array);
});
app.put("/:id", (req: any, res: any) => {
  let nid = req.params.id;
  // console.log(array);
  for (let x in array) {
    if (nid == array[x].id) {
      let data={
        id:nid,
        description: req.body.description
      };
      array[x]=data;
      console.log(data);
    }
  }
  res.sendStatus(201);
})

app.delete("/:id", function (req,res){
  let nid = req.params.id;

  for(let b in array){
    if(array[b].id == nid){
      array.splice(b,1);
    }
  }
  res.sendStatus(201);
})
app.delete("/", function (req,res){
  array = [];
console.log('deleted');
  res.sendStatus(201);
})

app.listen(port, () => {
  console.log(`Express with Typescript! http://localhost:${port}`);
});
