"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BitingRain extends UnimplementedCard {
  constructor (game) {
    super(game, "Biting Rain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BitingRain;
