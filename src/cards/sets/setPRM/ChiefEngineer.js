"use strict";
const Constants = require ("../../../Constants");
const ChiefEngineerBase = require("../setC16/ChiefEngineer");

class ChiefEngineer extends ChiefEngineerBase {
  constructor (game) {
    super(game, "Chief Engineer", "Magic Online Promos", "PRM");
  }
}

module.exports = ChiefEngineer;
