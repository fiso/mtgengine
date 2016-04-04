"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrborgVolcanoBase = require("../set8ED/UrborgVolcano.js");

class UrborgVolcano extends UrborgVolcanoBase {
  constructor(game) {
    super(game, "Urborg Volcano", "Invasion", "INV");
  }
}

module.exports = UrborgVolcano;
