"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrderoftheStars extends Card {
  constructor(game) {
    super(game, "Order of the Stars", "Guildpact", "GPT");
  }
}

module.exports = OrderoftheStars;
