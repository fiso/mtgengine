"use strict";
const Constants = require ("../../../Constants");
const LingeringSoulsBase = require("../setMM3/LingeringSouls");

class LingeringSouls extends LingeringSoulsBase {
  constructor (game) {
    super(game, "Lingering Souls", "Friday Night Magic 2012", "F12");
  }
}

module.exports = LingeringSouls;
