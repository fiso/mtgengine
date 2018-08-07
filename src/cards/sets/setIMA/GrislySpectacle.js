"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrislySpectacle extends UnimplementedCard {
  constructor (game) {
    super(game, "Grisly Spectacle", "Iconic Masters", "IMA");
  }
}

module.exports = GrislySpectacle;
