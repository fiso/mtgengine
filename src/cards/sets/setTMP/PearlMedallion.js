"use strict";
const Constants = require ("../../../Constants");
const PearlMedallionBase = require("../setC14/PearlMedallion");

class PearlMedallion extends PearlMedallionBase {
  constructor(game) {
    super(game, "Pearl Medallion", "Tempest", "TMP");
  }
}

module.exports = PearlMedallion;
