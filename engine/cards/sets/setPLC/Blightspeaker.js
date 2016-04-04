"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlightspeakerBase = require("../setMMA/Blightspeaker.js");

class Blightspeaker extends BlightspeakerBase {
  constructor(game) {
    super(game, "Blightspeaker", "Planar Chaos", "PLC");
  }
}

module.exports = Blightspeaker;
