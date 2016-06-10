"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Roast extends UnimplementedCard {
  constructor (game) {
    super(game, "Roast", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Roast;
