"use strict";
const Constants = require ("../../../Constants");
const PutrefyBase = require("../setC18/Putrefy");

class Putrefy extends PutrefyBase {
  constructor (game) {
    super(game, "Putrefy", "Modern Masters 2017", "MM3");
  }
}

module.exports = Putrefy;
