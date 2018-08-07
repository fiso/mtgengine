"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartofKiran extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart of Kiran", "Aether Revolt", "AER");
  }
}

module.exports = HeartofKiran;
