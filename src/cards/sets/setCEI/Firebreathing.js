"use strict";
const Constants = require ("../../../Constants");
const FirebreathingBase = require("../setM12/Firebreathing");

class Firebreathing extends FirebreathingBase {
  constructor (game) {
    super(game, "Firebreathing", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Firebreathing;
