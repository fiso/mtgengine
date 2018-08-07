"use strict";
const Constants = require ("../../../Constants");
const ElectrolyzeBase = require("../setIMA/Electrolyze");

class Electrolyze extends ElectrolyzeBase {
  constructor (game) {
    super(game, "Electrolyze", "Commander 2011", "CMD");
  }
}

module.exports = Electrolyze;
