const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();



app.use(express.json());







app.post("/",  async(req, res)=>{
    try {
      res.send('Created')
    } catch (err) {
        console.error(err.message)
    }
})



//get all todos
app.get("/", async(req, res)=>{
    try {
      
        res.json('Working')
        res.send("working")
      } catch (err) {
          console.error(err.message)
      }
  })


//getting a single task
app.get("/", async(req, res)=>{
    try {
        const {id} = req.params
        res.json('Working')
        res.send(id)
      } catch (err) {
          console.error(err.message)
      }
  })

//delete task
app.delete('/', async (req, res) => {
    try {
      const {id} = req.params
        res.json('Working')
        res.send(id)
      } catch (err) {
          console.error(err.message)
      }
  })

//delete completed task


//update task
app.put('/', async (req,res) => {
    try {
      const {id} = req.params
        res.json('Working')
        res.send(id)
      } catch (err) {
          console.error(err.message)
      }
  })


app.listen(PORT, ()=>{
    console.log('On PORT 8k')
});