"use strict";
const Constants = require ("../../../Constants");
const ElectrolyzeBase = require("../setIMA/Electrolyze");

class Electrolyze extends ElectrolyzeBase {
  constructor (game) {
    super(game, "Electrolyze", "IDW Comics 2012", "PIDW");
  }
}

module.exports = Electrolyze;
