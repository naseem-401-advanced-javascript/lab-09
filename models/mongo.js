/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable strict */

'use strict';
/**
 * model constructor
 * @param {object} schema
 */
class Model_CRUD {
  constructor(schema) {
    this.schema = schema;
  }

  /**
     *read one or more  records
     * @param {string} id
     * @returns {Array}
     */

  get(_id) {
    if (_id) {
      return this.schema.find({ _id });
    } else {
      return this.schema.find({});
      // bring all things
    }
  }

  /**
     * save a records to the db
     * @param {object} obj
     * @returns {object}
     */
  create(obj) {
    let newObject = new this.schema(obj);
    return newObject.save();
  }

  /**
     * update a record by id
     * @param {string} id
     * @param {object} updateObj
     * @returns {object}
     */
  update(_id, updateObj) {
    return this.schema.findByIdAndUpdate(_id, updateObj,{new:true});
  }

  /**
     * @param {string} id
     * @returns {object}
     */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}
module.exports = Model_CRUD;