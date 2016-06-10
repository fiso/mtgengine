"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrawlersPlate extends UnimplementedCard {
  constructor (game) {
    super(game, "Brawler's Plate", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BrawlersPlate;
