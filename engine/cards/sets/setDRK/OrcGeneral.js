"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcGeneralBase = require("../setME2/OrcGeneral.js");

class OrcGeneral extends OrcGeneralBase {
  constructor(game) {
    super(game, "Orc General", "The Dark", "DRK");
  }
}

module.exports = OrcGeneral;
