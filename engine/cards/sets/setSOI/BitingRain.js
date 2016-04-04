"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BitingRain extends Card {
  constructor(game) {
    super(game, "Biting Rain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BitingRain;
