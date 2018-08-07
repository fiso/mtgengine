"use strict";
const Constants = require ("../../../Constants");
const LingeringSoulsBase = require("../setMM3/LingeringSouls");

class LingeringSouls extends LingeringSoulsBase {
  constructor (game) {
    super(game, "Lingering Souls", "Magic Online Promos", "PRM");
  }
}

module.exports = LingeringSouls;
