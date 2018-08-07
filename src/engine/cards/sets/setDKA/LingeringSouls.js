"use strict";
const Constants = require ("../../../Constants");
const LingeringSoulsBase = require("../setMM3/LingeringSouls");

class LingeringSouls extends LingeringSoulsBase {
  constructor (game) {
    super(game, "Lingering Souls", "Dark Ascension", "DKA");
  }
}

module.exports = LingeringSouls;
