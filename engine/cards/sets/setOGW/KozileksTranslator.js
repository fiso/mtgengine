"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KozileksTranslator extends Card {
  constructor(game) {
    super(game, "Kozilek's Translator", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KozileksTranslator;
