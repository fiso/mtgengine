"use strict";
const Constants = require ("../../../Constants");
const DragonskullSummitBase = require("../setXLN/DragonskullSummit");

class DragonskullSummit extends DragonskullSummitBase {
  constructor (game) {
    super(game, "Dragonskull Summit", "Ixalan Promos", "PXLN");
  }
}

module.exports = DragonskullSummit;
