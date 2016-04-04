"use strict";
const Constants = require ("../../../Constants");
const LingeringSoulsBase = require("../setDKA/LingeringSouls");

class LingeringSouls extends LingeringSoulsBase {
  constructor(game) {
    super(game, "Lingering Souls", "Friday Night Magic", "pFNM");
  }
}

module.exports = LingeringSouls;
