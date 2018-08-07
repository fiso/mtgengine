"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Curiosity extends UnimplementedCard {
  constructor (game) {
    super(game, "Curiosity", "Masters 25", "A25");
  }
}

module.exports = Curiosity;
