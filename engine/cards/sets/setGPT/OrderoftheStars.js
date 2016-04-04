"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrderoftheStars extends UnimplementedCard {
  constructor(game) {
    super(game, "Order of the Stars", "Guildpact", "GPT");
  }
}

module.exports = OrderoftheStars;
