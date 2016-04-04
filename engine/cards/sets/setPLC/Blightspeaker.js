"use strict";
const Constants = require ("../../../Constants");
const BlightspeakerBase = require("../setMMA/Blightspeaker");

class Blightspeaker extends BlightspeakerBase {
  constructor(game) {
    super(game, "Blightspeaker", "Planar Chaos", "PLC");
  }
}

module.exports = Blightspeaker;
