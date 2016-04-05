"use strict";
const Constants = require ("../../../Constants");
const BloodrockCyclopsBase = require("../setBTD/BloodrockCyclops");

class BloodrockCyclops extends BloodrockCyclopsBase {
  constructor(game) {
    super(game, "Bloodrock Cyclops", "Tenth Edition", "10E");
  }
}

module.exports = BloodrockCyclops;
