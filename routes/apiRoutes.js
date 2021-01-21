const router = require("express").Router()
const db = require("../models")


//Getting workouts from db
router.get("/api/workouts", (req,res)=>{
  db.Workout.find({})
  .then((result)=>{
    res.json(result)
  })
  .catch((err)=>{
    res.json(err)
  })
})

//Updating existing workout in the DB
router.put("/api/workouts/:id", ({body,params},res) =>{
  db.Workout.findByIdAnUpdate(params.id, { $push:
    {
      exercises:body
    }
  }, 
  {
    new: true,
   runValidators: true
  })
    .then((result)=>{
      res.json(result)
    })
    .catch((err)=>{
      res.json(err)
    })
})

//Adding a new workout 
router.post("/api/workouts",(req,res)=>{
    db.Workout.create(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

//getting the workouts in range with a limit of 7 days  
router.get("/api/workouts/range",(req,res)=>{
    db.Workout.find({})
    .limit(7)
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

module.exports = router