"use strict";
const Constants = require ("../../../Constants");
const OblivionRingBase = require("../setARC/OblivionRing");

class OblivionRing extends OblivionRingBase {
  constructor(game) {
    super(game, "Oblivion Ring", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = OblivionRing;
