"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpawningPool extends UnimplementedCard {
  constructor (game) {
    super(game, "Spawning Pool", "Tenth Edition", "10E");
  }
}

module.exports = SpawningPool;
