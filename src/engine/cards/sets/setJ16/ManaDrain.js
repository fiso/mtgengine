"use strict";
const Constants = require ("../../../Constants");
const ManaDrainBase = require("../setIMA/ManaDrain");

class ManaDrain extends ManaDrainBase {
  constructor (game) {
    super(game, "Mana Drain", "Judge Gift Cards 2016", "J16");
  }
}

module.exports = ManaDrain;
