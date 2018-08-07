"use strict";
const Constants = require ("../../../Constants");
const OblivionRingBase = require("../setMM2/OblivionRing");

class OblivionRing extends OblivionRingBase {
  constructor (game) {
    super(game, "Oblivion Ring", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = OblivionRing;
