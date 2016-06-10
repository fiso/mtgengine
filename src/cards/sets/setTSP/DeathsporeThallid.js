"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsporeThallid extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathspore Thallid", "Time Spiral", "TSP");
  }
}

module.exports = DeathsporeThallid;
