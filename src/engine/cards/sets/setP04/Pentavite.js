"use strict";
const Constants = require ("../../../Constants");
const PentaviteBase = require("../setTCM2/Pentavite");

class Pentavite extends PentaviteBase {
  constructor (game) {
    super(game, "Pentavite", "Magic Player Rewards 2004", "P04");
  }
}

module.exports = Pentavite;
