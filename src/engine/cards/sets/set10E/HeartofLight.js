"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartofLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart of Light", "Tenth Edition", "10E");
  }
}

module.exports = HeartofLight;
