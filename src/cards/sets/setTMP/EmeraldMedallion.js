"use strict";
const Constants = require ("../../../Constants");
const EmeraldMedallionBase = require("../setC14/EmeraldMedallion");

class EmeraldMedallion extends EmeraldMedallionBase {
  constructor(game) {
    super(game, "Emerald Medallion", "Tempest", "TMP");
  }
}

module.exports = EmeraldMedallion;
