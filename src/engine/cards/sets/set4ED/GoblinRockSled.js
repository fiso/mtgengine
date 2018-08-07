"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRockSled extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Rock Sled", "Fourth Edition", "4ED");
  }
}

module.exports = GoblinRockSled;
