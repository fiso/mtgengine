"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SapphireMedallionBase = require("../setC14/SapphireMedallion.js");

class SapphireMedallion extends SapphireMedallionBase {
  constructor(game) {
    super(game, "Sapphire Medallion", "Tempest", "TMP");
  }
}

module.exports = SapphireMedallion;
