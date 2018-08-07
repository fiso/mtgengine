"use strict";
const Constants = require ("../../../Constants");
const PlagueMyrBase = require("../setTD2/PlagueMyr");

class PlagueMyr extends PlagueMyrBase {
  constructor (game) {
    super(game, "Plague Myr", "Magic Online Promos", "PRM");
  }
}

module.exports = PlagueMyr;
