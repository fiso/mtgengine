"use strict";
const Constants = require ("../../../Constants");
const ElectrolyzeBase = require("../setpCMP/Electrolyze");

class Electrolyze extends ElectrolyzeBase {
  constructor (game) {
    super(game, "Electrolyze", "Modern Masters", "MMA");
  }
}

module.exports = Electrolyze;
