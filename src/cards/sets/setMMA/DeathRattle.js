"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathRattle extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Rattle", "Modern Masters", "MMA");
  }
}

module.exports = DeathRattle;
