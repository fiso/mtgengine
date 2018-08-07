"use strict";
const Constants = require ("../../../Constants");
const TrueheartDuelistBase = require("../setAKH/TrueheartDuelist");

class TrueheartDuelist extends TrueheartDuelistBase {
  constructor (game) {
    super(game, "Trueheart Duelist", "Amonkhet Promos", "PAKH");
  }
}

module.exports = TrueheartDuelist;
