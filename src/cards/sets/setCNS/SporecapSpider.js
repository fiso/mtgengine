"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SporecapSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Sporecap Spider", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SporecapSpider;
