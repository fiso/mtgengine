"use strict";
const Constants = require ("../../../Constants");
const UrborgVolcanoBase = require("../setC17/UrborgVolcano");

class UrborgVolcano extends UrborgVolcanoBase {
  constructor (game) {
    super(game, "Urborg Volcano", "Eighth Edition", "8ED");
  }
}

module.exports = UrborgVolcano;
