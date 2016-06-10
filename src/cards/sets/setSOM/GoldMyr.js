"use strict";
const Constants = require ("../../../Constants");
const GoldMyrBase = require("../setMRD/GoldMyr");

class GoldMyr extends GoldMyrBase {
  constructor (game) {
    super(game, "Gold Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GoldMyr;
