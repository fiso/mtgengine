"use strict";
const Constants = require ("../../../Constants");
const UrborgVolcanoBase = require("../setC17/UrborgVolcano");

class UrborgVolcano extends UrborgVolcanoBase {
  constructor (game) {
    super(game, "Urborg Volcano", "World Championship Decks 2001", "WC01");
  }
}

module.exports = UrborgVolcano;
