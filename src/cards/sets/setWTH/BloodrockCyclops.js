"use strict";
const Constants = require ("../../../Constants");
const BloodrockCyclopsBase = require("../setBTD/BloodrockCyclops");

class BloodrockCyclops extends BloodrockCyclopsBase {
  constructor (game) {
    super(game, "Bloodrock Cyclops", "Weatherlight", "WTH");
  }
}

module.exports = BloodrockCyclops;
