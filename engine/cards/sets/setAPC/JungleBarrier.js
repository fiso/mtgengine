"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleBarrier extends UnimplementedCard {
  constructor(game) {
    super(game, "Jungle Barrier", "Apocalypse", "APC");
  }
}

module.exports = JungleBarrier;
