"use strict";
const Constants = require ("../../../Constants");
const PentaviteBase = require("../setTCM2/Pentavite");

class Pentavite extends PentaviteBase {
  constructor (game) {
    super(game, "Pentavite", "Magic 2012 Tokens", "TM12");
  }
}

module.exports = Pentavite;
