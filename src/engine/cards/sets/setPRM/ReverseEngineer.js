"use strict";
const Constants = require ("../../../Constants");
const ReverseEngineerBase = require("../setC18/ReverseEngineer");

class ReverseEngineer extends ReverseEngineerBase {
  constructor (game) {
    super(game, "Reverse Engineer", "Magic Online Promos", "PRM");
  }
}

module.exports = ReverseEngineer;
