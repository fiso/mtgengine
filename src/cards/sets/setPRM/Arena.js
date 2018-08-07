"use strict";
const Constants = require ("../../../Constants");
const ArenaBase = require("../setTSB/Arena");

class Arena extends ArenaBase {
  constructor (game) {
    super(game, "Arena", "Magic Online Promos", "PRM");
  }
}

module.exports = Arena;
