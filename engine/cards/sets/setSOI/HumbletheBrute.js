"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumbletheBrute extends UnimplementedCard {
  constructor(game) {
    super(game, "Humble the Brute", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HumbletheBrute;
