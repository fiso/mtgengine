"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StingingBarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Stinging Barrier", "Mercadian Masques", "MMQ");
  }
}

module.exports = StingingBarrier;
