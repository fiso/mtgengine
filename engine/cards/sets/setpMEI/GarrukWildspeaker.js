"use strict";
const Constants = require ("../../../Constants");
const GarrukWildspeakerBase = require("../setDD3_GVL/GarrukWildspeaker");

class GarrukWildspeaker extends GarrukWildspeakerBase {
  constructor(game) {
    super(game, "Garruk Wildspeaker", "Media Inserts", "pMEI");
  }
}

module.exports = GarrukWildspeaker;
