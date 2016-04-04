"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DevilsPlayBase = require("../setDDK/DevilsPlay.js");

class DevilsPlay extends DevilsPlayBase {
  constructor(game) {
    super(game, "Devil's Play", "Media Inserts", "pMEI");
  }
}

module.exports = DevilsPlay;
