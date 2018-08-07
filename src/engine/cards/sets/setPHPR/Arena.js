"use strict";
const Constants = require ("../../../Constants");
const ArenaBase = require("../setTSB/Arena");

class Arena extends ArenaBase {
  constructor (game) {
    super(game, "Arena", "HarperPrism Book Promos", "PHPR");
  }
}

module.exports = Arena;
