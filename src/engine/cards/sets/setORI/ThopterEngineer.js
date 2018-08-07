"use strict";
const Constants = require ("../../../Constants");
const ThopterEngineerBase = require("../setC18/ThopterEngineer");

class ThopterEngineer extends ThopterEngineerBase {
  constructor (game) {
    super(game, "Thopter Engineer", "Magic Origins", "ORI");
  }
}

module.exports = ThopterEngineer;
