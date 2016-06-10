"use strict";
const Constants = require ("../../../Constants");
const FieryFallBase = require("../setCON/FieryFall");

class FieryFall extends FieryFallBase {
  constructor (game) {
    super(game, "Fiery Fall", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FieryFall;
