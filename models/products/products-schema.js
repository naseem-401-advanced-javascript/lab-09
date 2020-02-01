'use strict';

 const mongoose =require('mongoose')
 require('./products.js')
  
 const productsSchema = mongoose.Schema({
 name:{type:String,required:true},
 display_name:{type:String,required:true},
 description:{type:String,required:true}},
 {toObject:{virtuals:true},toJson:{virtuals:true}
 });

 productsSchema.virtuals('actualCategory',{
    ref: 'categories',
    localField: 'category',
    foreignField: 'name',
    justOne: false
 })

 productsSchema.pre('findOne',function(){
     //methode to executed one after anathor when each middlewre calls(next())
     try{
         this.populate('actualCategory');
         //Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s)


     }catch(err){
         console.error(err);
     }
 })
 module.exports= mongoose.model('products',productsSchema)
