"use strict";
const Constants = require ("../../../Constants");
const DevilsPlayBase = require("../setDDK/DevilsPlay");

class DevilsPlay extends DevilsPlayBase {
  constructor(game) {
    super(game, "Devil's Play", "Media Inserts", "pMEI");
  }
}

module.exports = DevilsPlay;
