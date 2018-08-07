"use strict";
const Constants = require ("../../../Constants");
const TrueheartDuelistBase = require("../setAKH/TrueheartDuelist");

class TrueheartDuelist extends TrueheartDuelistBase {
  constructor (game) {
    super(game, "Trueheart Duelist", "Magic Online Promos", "PRM");
  }
}

module.exports = TrueheartDuelist;
