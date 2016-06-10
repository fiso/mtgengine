"use strict";
const Constants = require ("../../../Constants");
const ElectrolyzeBase = require("../setpCMP/Electrolyze");

class Electrolyze extends ElectrolyzeBase {
  constructor (game) {
    super(game, "Electrolyze", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Electrolyze;
