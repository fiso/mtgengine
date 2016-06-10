"use strict";
const Constants = require ("../../../Constants");
const FirebreathingBase = require("../set6ED/Firebreathing");

class Firebreathing extends FirebreathingBase {
  constructor (game) {
    super(game, "Firebreathing", "Collector's Edition", "CED");
  }
}

module.exports = Firebreathing;
