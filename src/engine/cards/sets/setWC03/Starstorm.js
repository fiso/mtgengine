"use strict";
const Constants = require ("../../../Constants");
const StarstormBase = require("../setCM2/Starstorm");

class Starstorm extends StarstormBase {
  constructor (game) {
    super(game, "Starstorm", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Starstorm;
