"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GarrukWildspeakerBase = require("../setDD3_GVL/GarrukWildspeaker.js");

class GarrukWildspeaker extends GarrukWildspeakerBase {
  constructor(game) {
    super(game, "Garruk Wildspeaker", "Magic 2011", "M11");
  }
}

module.exports = GarrukWildspeaker;
