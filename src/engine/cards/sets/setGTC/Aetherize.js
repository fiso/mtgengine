"use strict";
const Constants = require ("../../../Constants");
const AetherizeBase = require("../setIMA/Aetherize");

class Aetherize extends AetherizeBase {
  constructor (game) {
    super(game, "Aetherize", "Gatecrash", "GTC");
  }
}

module.exports = Aetherize;
