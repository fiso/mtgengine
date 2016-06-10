"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireSerpent extends UnimplementedCard {
  constructor (game) {
    super(game, "Spire Serpent", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpireSerpent;
