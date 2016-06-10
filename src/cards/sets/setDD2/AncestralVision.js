"use strict";
const Constants = require ("../../../Constants");
const AncestralVisionBase = require("../setDD3_JVC/AncestralVision");

class AncestralVision extends AncestralVisionBase {
  constructor (game) {
    super(game, "Ancestral Vision", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = AncestralVision;
