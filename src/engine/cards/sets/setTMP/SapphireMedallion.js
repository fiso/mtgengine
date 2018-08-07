"use strict";
const Constants = require ("../../../Constants");
const SapphireMedallionBase = require("../setC14/SapphireMedallion");

class SapphireMedallion extends SapphireMedallionBase {
  constructor (game) {
    super(game, "Sapphire Medallion", "Tempest", "TMP");
  }
}

module.exports = SapphireMedallion;
