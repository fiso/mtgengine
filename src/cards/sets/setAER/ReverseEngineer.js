"use strict";
const Constants = require ("../../../Constants");
const ReverseEngineerBase = require("../setC18/ReverseEngineer");

class ReverseEngineer extends ReverseEngineerBase {
  constructor (game) {
    super(game, "Reverse Engineer", "Aether Revolt", "AER");
  }
}

module.exports = ReverseEngineer;
