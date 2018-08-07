"use strict";
const Constants = require ("../../../Constants");
const BlightningBase = require("../setA25/Blightning");

class Blightning extends BlightningBase {
  constructor (game) {
    super(game, "Blightning", "Magic Player Rewards 2009", "P09");
  }
}

module.exports = Blightning;
