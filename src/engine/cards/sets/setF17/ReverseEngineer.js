"use strict";
const Constants = require ("../../../Constants");
const ReverseEngineerBase = require("../setC18/ReverseEngineer");

class ReverseEngineer extends ReverseEngineerBase {
  constructor (game) {
    super(game, "Reverse Engineer", "Friday Night Magic 2017", "F17");
  }
}

module.exports = ReverseEngineer;
