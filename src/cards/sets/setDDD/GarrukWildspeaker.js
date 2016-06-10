"use strict";
const Constants = require ("../../../Constants");
const GarrukWildspeakerBase = require("../setDD3_GVL/GarrukWildspeaker");

class GarrukWildspeaker extends GarrukWildspeakerBase {
  constructor (game) {
    super(game, "Garruk Wildspeaker", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = GarrukWildspeaker;
