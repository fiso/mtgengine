"use strict";
const Constants = require ("../../../Constants");
const BlightedShamanBase = require("../set6ED/BlightedShaman");

class BlightedShaman extends BlightedShamanBase {
  constructor(game) {
    super(game, "Blighted Shaman", "Mirage", "MIR");
  }
}

module.exports = BlightedShaman;
