"use strict";
const Constants = require ("../../../Constants");
const ChiefEngineerBase = require("../setC16/ChiefEngineer");

class ChiefEngineer extends ChiefEngineerBase {
  constructor (game) {
    super(game, "Chief Engineer", "Magic 2015", "M15");
  }
}

module.exports = ChiefEngineer;
