"use strict";
const Constants = require ("../../../Constants");
const GarrukWildspeakerBase = require("../setGVL/GarrukWildspeaker");

class GarrukWildspeaker extends GarrukWildspeakerBase {
  constructor (game) {
    super(game, "Garruk Wildspeaker", "Magic 2010", "M10");
  }
}

module.exports = GarrukWildspeaker;
