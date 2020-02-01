"use strict";
 /**
  * model constructor 
  * @param {object} schema
  */
class Model_CRUD{
 constructor(schema){
     this.schema
 }
 /**
  *read one or more  records
  * @param {string} id 
  * @returns {Array}
  */
get (id){
    if(id){
        return this.schema.find(id)
    }else{
        return this.schema({})
        // bring all things 
    }
}

/**
 * save a records to the db
 * @param {object} obj
 * @returns {object} 
 */
create(obj){
    let newObject = new this.schema(obj)
    return newObject.save()
}

/**
 * update a record by id
 * @param {string} id 
 * @param {object} updateObj 
 * @returns {object}
 */
update(id,updateObj){
    return this.schema.findByIdAndUpdate(id,updateObj)
}

/**
 * @param {string} id
 * @returns {object}
 */
delete(id){
    return this.schema.findByIdAndDelete(id)
}
}
module.exports=Model_CRUD;