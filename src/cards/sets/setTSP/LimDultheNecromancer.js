"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDultheNecromancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Lim-Dûl the Necromancer", "Time Spiral", "TSP");
  }
}

module.exports = LimDultheNecromancer;
