"use strict";
const Constants = require ("../../../Constants");
const BalanWanderingKnightBase = require("../setC17/BalanWanderingKnight");

class BalanWanderingKnight extends BalanWanderingKnightBase {
  constructor (game) {
    super(game, "Balan, Wandering Knight", "You Make the Cube", "PZ2");
  }
}

module.exports = BalanWanderingKnight;
