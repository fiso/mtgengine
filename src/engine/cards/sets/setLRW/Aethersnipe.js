"use strict";
const Constants = require ("../../../Constants");
const AethersnipeBase = require("../setMM2/Aethersnipe");

class Aethersnipe extends AethersnipeBase {
  constructor (game) {
    super(game, "Aethersnipe", "Lorwyn", "LRW");
  }
}

module.exports = Aethersnipe;
