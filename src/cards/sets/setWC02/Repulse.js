"use strict";
const Constants = require ("../../../Constants");
const RepulseBase = require("../setCN2/Repulse");

class Repulse extends RepulseBase {
  constructor (game) {
    super(game, "Repulse", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Repulse;
