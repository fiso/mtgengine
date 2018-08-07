"use strict";
const Constants = require ("../../../Constants");
const DragonskullSummitBase = require("../setXLN/DragonskullSummit");

class DragonskullSummit extends DragonskullSummitBase {
  constructor (game) {
    super(game, "Dragonskull Summit", "Magic 2010", "M10");
  }
}

module.exports = DragonskullSummit;
