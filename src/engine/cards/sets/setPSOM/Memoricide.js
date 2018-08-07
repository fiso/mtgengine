"use strict";
const Constants = require ("../../../Constants");
const MemoricideBase = require("../setSOM/Memoricide");

class Memoricide extends MemoricideBase {
  constructor (game) {
    super(game, "Memoricide", "Scars of Mirrodin Promos", "PSOM");
  }
}

module.exports = Memoricide;
