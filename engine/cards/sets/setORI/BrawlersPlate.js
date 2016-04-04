"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrawlersPlateBase = require("../setM15/BrawlersPlate.js");

class BrawlersPlate extends BrawlersPlateBase {
  constructor(game) {
    super(game, "Brawler's Plate", "Magic Origins", "ORI");
  }
}

module.exports = BrawlersPlate;
