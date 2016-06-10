"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticBarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Barrier", "Commander 2013 Edition", "C13");
  }
}

module.exports = MysticBarrier;
