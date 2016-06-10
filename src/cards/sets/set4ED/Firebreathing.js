"use strict";
const Constants = require ("../../../Constants");
const FirebreathingBase = require("../set6ED/Firebreathing");

class Firebreathing extends FirebreathingBase {
  constructor (game) {
    super(game, "Firebreathing", "Fourth Edition", "4ED");
  }
}

module.exports = Firebreathing;
