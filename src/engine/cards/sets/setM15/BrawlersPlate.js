"use strict";
const Constants = require ("../../../Constants");
const BrawlersPlateBase = require("../setORI/BrawlersPlate");

class BrawlersPlate extends BrawlersPlateBase {
  constructor (game) {
    super(game, "Brawler's Plate", "Magic 2015", "M15");
  }
}

module.exports = BrawlersPlate;
