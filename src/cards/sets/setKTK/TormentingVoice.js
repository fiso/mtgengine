"use strict";
const Constants = require ("../../../Constants");
const TormentingVoiceBase = require("../setDTK/TormentingVoice");

class TormentingVoice extends TormentingVoiceBase {
  constructor (game) {
    super(game, "Tormenting Voice", "Khans of Tarkir", "KTK");
  }
}

module.exports = TormentingVoice;
