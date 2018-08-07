"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IthHighArcanist extends UnimplementedCard {
  constructor (game) {
    super(game, "Ith, High Arcanist", "Time Spiral", "TSP");
  }
}

module.exports = IthHighArcanist;
