"use strict";
const Constants = require ("../../../Constants");
const GoldMyrBase = require("../setTD2/GoldMyr");

class GoldMyr extends GoldMyrBase {
  constructor (game) {
    super(game, "Gold Myr", "Mirrodin", "MRD");
  }
}

module.exports = GoldMyr;
