"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StingingBarrier extends Card {
  constructor(game) {
    super(game, "Stinging Barrier", "Mercadian Masques", "MMQ");
  }
}

module.exports = StingingBarrier;
