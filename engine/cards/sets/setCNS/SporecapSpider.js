"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SporecapSpider extends Card {
  constructor(game) {
    super(game, "Sporecap Spider", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SporecapSpider;
