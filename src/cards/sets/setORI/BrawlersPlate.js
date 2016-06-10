"use strict";
const Constants = require ("../../../Constants");
const BrawlersPlateBase = require("../setM15/BrawlersPlate");

class BrawlersPlate extends BrawlersPlateBase {
  constructor (game) {
    super(game, "Brawler's Plate", "Magic Origins", "ORI");
  }
}

module.exports = BrawlersPlate;
