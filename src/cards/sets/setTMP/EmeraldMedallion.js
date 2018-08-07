"use strict";
const Constants = require ("../../../Constants");
const EmeraldMedallionBase = require("../setCMA/EmeraldMedallion");

class EmeraldMedallion extends EmeraldMedallionBase {
  constructor (game) {
    super(game, "Emerald Medallion", "Tempest", "TMP");
  }
}

module.exports = EmeraldMedallion;
