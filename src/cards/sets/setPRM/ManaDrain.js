"use strict";
const Constants = require ("../../../Constants");
const ManaDrainBase = require("../setIMA/ManaDrain");

class ManaDrain extends ManaDrainBase {
  constructor (game) {
    super(game, "Mana Drain", "Magic Online Promos", "PRM");
  }
}

module.exports = ManaDrain;
