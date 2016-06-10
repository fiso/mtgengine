"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Negate extends UnimplementedCard {
  constructor (game) {
    super(game, "Negate", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Negate;
