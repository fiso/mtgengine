"use strict";
const Constants = require ("../../../Constants");
const BroodhatchNantukoBase = require("../setA25/BroodhatchNantuko");

class BroodhatchNantuko extends BroodhatchNantukoBase {
  constructor (game) {
    super(game, "Broodhatch Nantuko", "Onslaught", "ONS");
  }
}

module.exports = BroodhatchNantuko;
