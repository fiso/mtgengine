"use strict";
const Constants = require ("../../../Constants");
const OrcGeneralBase = require("../setME2/OrcGeneral");

class OrcGeneral extends OrcGeneralBase {
  constructor(game) {
    super(game, "Orc General", "The Dark", "DRK");
  }
}

module.exports = OrcGeneral;
