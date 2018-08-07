"use strict";
const Constants = require ("../../../Constants");
const DragonskullSummitBase = require("../setXLN/DragonskullSummit");

class DragonskullSummit extends DragonskullSummitBase {
  constructor (game) {
    super(game, "Dragonskull Summit", "Magic 2011", "M11");
  }
}

module.exports = DragonskullSummit;
