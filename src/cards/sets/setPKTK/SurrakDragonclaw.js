"use strict";
const Constants = require ("../../../Constants");
const SurrakDragonclawBase = require("../setKTK/SurrakDragonclaw");

class SurrakDragonclaw extends SurrakDragonclawBase {
  constructor (game) {
    super(game, "Surrak Dragonclaw", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = SurrakDragonclaw;
