"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatedSpider extends Card {
  constructor(game) {
    super(game, "Plated Spider", "Beatdown Box Set", "BTD");
  }
}

module.exports = PlatedSpider;
