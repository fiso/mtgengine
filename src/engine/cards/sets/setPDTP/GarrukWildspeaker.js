"use strict";
const Constants = require ("../../../Constants");
const GarrukWildspeakerBase = require("../setGVL/GarrukWildspeaker");

class GarrukWildspeaker extends GarrukWildspeakerBase {
  constructor (game) {
    super(game, "Garruk Wildspeaker", "Duels of the Planeswalkers Promos 2009", "PDTP");
  }
}

module.exports = GarrukWildspeaker;
