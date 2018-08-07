"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Zombify extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombify", "Masters 25", "A25");
  }
}

module.exports = Zombify;
