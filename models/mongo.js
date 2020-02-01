"use strict";
 
class Model_CRUD{
 constructor(schema){
     this.schema
 }
get (id){
    if(id){
        return this.schema.find(id)
    }else{
        return this.schema({})
        // bring all things 
    }
}
create(obj){
    let newObject = new this.schema(obj)
    return newObject.save()
}
update(id,updateObj){
    return this.schema.findByIdAndUpdate(id,updateObj)
}
delete(id){
    return this.schema.findByIdAndDelete(id)
}
}
module.exports=Model_CRUD;