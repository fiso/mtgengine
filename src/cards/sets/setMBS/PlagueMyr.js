"use strict";
const Constants = require ("../../../Constants");
const PlagueMyrBase = require("../setTD2/PlagueMyr");

class PlagueMyr extends PlagueMyrBase {
  constructor (game) {
    super(game, "Plague Myr", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PlagueMyr;
