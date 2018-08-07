"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Regrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Regrowth", "Masters 25", "A25");
  }
}

module.exports = Regrowth;
