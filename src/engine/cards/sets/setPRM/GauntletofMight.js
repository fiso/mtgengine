"use strict";
const Constants = require ("../../../Constants");
const GauntletofMightBase = require("../setME4/GauntletofMight");

class GauntletofMight extends GauntletofMightBase {
  constructor (game) {
    super(game, "Gauntlet of Might", "Magic Online Promos", "PRM");
  }
}

module.exports = GauntletofMight;
