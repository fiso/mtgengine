"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodrockCyclopsBase = require("../setBTD/BloodrockCyclops.js");

class BloodrockCyclops extends BloodrockCyclopsBase {
  constructor(game) {
    super(game, "Bloodrock Cyclops", "Weatherlight", "WTH");
  }
}

module.exports = BloodrockCyclops;
