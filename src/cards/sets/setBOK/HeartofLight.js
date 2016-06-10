"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartofLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart of Light", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HeartofLight;
