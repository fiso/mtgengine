"use strict";
const Constants = require ("../../../Constants");
const LilianasMasteryBase = require("../setAKH/LilianasMastery");

class LilianasMastery extends LilianasMasteryBase {
  constructor (game) {
    super(game, "Liliana's Mastery", "Amonkhet Promos", "PAKH");
  }
}

module.exports = LilianasMastery;
