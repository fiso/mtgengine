"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhoenixHeart extends UnimplementedCard {
  constructor (game) {
    super(game, "Phoenix Heart", "Celebration Cards", "PCEL");
  }
}

module.exports = PhoenixHeart;
