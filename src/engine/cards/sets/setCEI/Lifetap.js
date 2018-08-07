"use strict";
const Constants = require ("../../../Constants");
const LifetapBase = require("../set5ED/Lifetap");

class Lifetap extends LifetapBase {
  constructor (game) {
    super(game, "Lifetap", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Lifetap;
