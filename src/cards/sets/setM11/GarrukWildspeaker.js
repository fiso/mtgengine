"use strict";
const Constants = require ("../../../Constants");
const GarrukWildspeakerBase = require("../setDD3_GVL/GarrukWildspeaker");

class GarrukWildspeaker extends GarrukWildspeakerBase {
  constructor (game) {
    super(game, "Garruk Wildspeaker", "Magic 2011", "M11");
  }
}

module.exports = GarrukWildspeaker;
