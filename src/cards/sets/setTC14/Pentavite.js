"use strict";
const Constants = require ("../../../Constants");
const PentaviteBase = require("../setTCM2/Pentavite");

class Pentavite extends PentaviteBase {
  constructor (game) {
    super(game, "Pentavite", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Pentavite;
