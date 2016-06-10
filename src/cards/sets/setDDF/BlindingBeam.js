"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingBeam extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinding Beam", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = BlindingBeam;
