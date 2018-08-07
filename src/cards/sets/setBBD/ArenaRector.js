"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArenaRector extends UnimplementedCard {
  constructor (game) {
    super(game, "Arena Rector", "Battlebond", "BBD");
  }
}

module.exports = ArenaRector;
