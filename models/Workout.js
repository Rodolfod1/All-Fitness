const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day:{
        type: Date,
        default:Date()
    },
    exercises:[
        {
          type:{
              type:String,
              required: true
          }, 
          name:{
              type: String,
              required: true
          },
          duration:{
              type: Number,
              required: true
          },
          weight:{
              type:Number
          },
          reps:{
            type:Number
          },
          sets:{
            type:Number
          },
          distance:{
            type:Number
          }, 
        }
    ], 
},
{ toJSON: { virtuals: true }}
);

//here its my virtual for to calculate my total duration 
WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise)=>{ return total + exercise.duration},0);
});

const Workout= mongoose.model("Workout",WorkoutSchema);
module.exports=Workout;