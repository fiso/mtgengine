"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TormentingVoiceBase = require("../setDTK/TormentingVoice.js");

class TormentingVoice extends TormentingVoiceBase {
  constructor(game) {
    super(game, "Tormenting Voice", "Khans of Tarkir", "KTK");
  }
}

module.exports = TormentingVoice;
