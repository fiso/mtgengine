"use strict";
const Constants = require ("../../../Constants");
const AbsorbVisBase = require("../setCON/AbsorbVis");

class AbsorbVis extends AbsorbVisBase {
  constructor(game) {
    super(game, "Absorb Vis", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = AbsorbVis;
