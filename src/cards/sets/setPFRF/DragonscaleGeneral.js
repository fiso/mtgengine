"use strict";
const Constants = require ("../../../Constants");
const DragonscaleGeneralBase = require("../setFRF/DragonscaleGeneral");

class DragonscaleGeneral extends DragonscaleGeneralBase {
  constructor (game) {
    super(game, "Dragonscale General", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = DragonscaleGeneral;
