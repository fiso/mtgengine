"use strict";
const Constants = require ("../../../Constants");
const PlagueMyrBase = require("../setMBS/PlagueMyr");

class PlagueMyr extends PlagueMyrBase {
  constructor (game) {
    super(game, "Plague Myr", "WPN and Gateway", "pWPN");
  }
}

module.exports = PlagueMyr;
