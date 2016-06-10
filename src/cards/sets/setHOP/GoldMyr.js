"use strict";
const Constants = require ("../../../Constants");
const GoldMyrBase = require("../setMRD/GoldMyr");

class GoldMyr extends GoldMyrBase {
  constructor (game) {
    super(game, "Gold Myr", "Planechase", "HOP");
  }
}

module.exports = GoldMyr;
