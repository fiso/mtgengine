"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindingBeam extends Card {
  constructor(game) {
    super(game, "Blinding Beam", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = BlindingBeam;
