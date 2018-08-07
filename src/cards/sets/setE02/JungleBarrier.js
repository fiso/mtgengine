"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleBarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Barrier", "Explorers of Ixalan", "E02");
  }
}

module.exports = JungleBarrier;
