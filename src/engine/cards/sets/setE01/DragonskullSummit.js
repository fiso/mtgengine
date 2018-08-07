"use strict";
const Constants = require ("../../../Constants");
const DragonskullSummitBase = require("../setXLN/DragonskullSummit");

class DragonskullSummit extends DragonskullSummitBase {
  constructor (game) {
    super(game, "Dragonskull Summit", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = DragonskullSummit;
