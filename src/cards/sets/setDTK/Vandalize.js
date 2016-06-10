"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vandalize extends UnimplementedCard {
  constructor (game) {
    super(game, "Vandalize", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Vandalize;
