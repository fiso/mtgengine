"use strict";
const Constants = require ("../../../Constants");
const ElectrolyzeBase = require("../setIMA/Electrolyze");

class Electrolyze extends ElectrolyzeBase {
  constructor (game) {
    super(game, "Electrolyze", "Champs and States", "PCMP");
  }
}

module.exports = Electrolyze;
