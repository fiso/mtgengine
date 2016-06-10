"use strict";
const Constants = require ("../../../Constants");
const ChiefEngineerBase = require("../setM15/ChiefEngineer");

class ChiefEngineer extends ChiefEngineerBase {
  constructor (game) {
    super(game, "Chief Engineer", "Magic Game Day", "pMGD");
  }
}

module.exports = ChiefEngineer;
