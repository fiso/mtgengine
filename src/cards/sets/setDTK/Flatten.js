"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flatten extends UnimplementedCard {
  constructor (game) {
    super(game, "Flatten", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Flatten;
