"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessRacer extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Racer", "Aether Revolt", "AER");
  }
}

module.exports = RecklessRacer;
