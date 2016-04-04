"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoyalGyrfalcon extends Card {
  constructor(game) {
    super(game, "Loyal Gyrfalcon", "Eventide", "EVE");
  }
}

module.exports = LoyalGyrfalcon;
