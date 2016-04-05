"use strict";
const Constants = require ("../../../Constants");
const AethersnipeBase = require("../setDD3_JVC/Aethersnipe");

class Aethersnipe extends AethersnipeBase {
  constructor(game) {
    super(game, "Æthersnipe", "Lorwyn", "LRW");
  }
}

module.exports = Aethersnipe;
