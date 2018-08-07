"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrawlersPlate extends UnimplementedCard {
  constructor (game) {
    super(game, "Brawler's Plate", "Magic Origins", "ORI");
  }
}

module.exports = BrawlersPlate;
