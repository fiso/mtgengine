"use strict";
const Constants = require ("../../../Constants");
const TormentingVoiceBase = require("../setM19/TormentingVoice");

class TormentingVoice extends TormentingVoiceBase {
  constructor (game) {
    super(game, "Tormenting Voice", "Khans of Tarkir", "KTK");
  }
}

module.exports = TormentingVoice;
