"use strict";
const Constants = require ("../../../Constants");
const AetherizeBase = require("../setIMA/Aetherize");

class Aetherize extends AetherizeBase {
  constructor (game) {
    super(game, "Aetherize", "Commander 2015", "C15");
  }
}

module.exports = Aetherize;
