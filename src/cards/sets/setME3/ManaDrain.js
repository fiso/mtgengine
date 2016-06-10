"use strict";
const Constants = require ("../../../Constants");
const ManaDrainBase = require("../setLEG/ManaDrain");

class ManaDrain extends ManaDrainBase {
  constructor (game) {
    super(game, "Mana Drain", "Masters Edition III", "ME3");
  }
}

module.exports = ManaDrain;
