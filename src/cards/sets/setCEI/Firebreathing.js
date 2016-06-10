"use strict";
const Constants = require ("../../../Constants");
const FirebreathingBase = require("../set6ED/Firebreathing");

class Firebreathing extends FirebreathingBase {
  constructor (game) {
    super(game, "Firebreathing", "International Collector's Edition", "CEI");
  }
}

module.exports = Firebreathing;
