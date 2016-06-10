"use strict";
const Constants = require ("../../../Constants");
const UrborgVolcanoBase = require("../set8ED/UrborgVolcano");

class UrborgVolcano extends UrborgVolcanoBase {
  constructor (game) {
    super(game, "Urborg Volcano", "Invasion", "INV");
  }
}

module.exports = UrborgVolcano;
