"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalBear extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Bear", "Masters 25", "A25");
  }
}

module.exports = PhantasmalBear;
