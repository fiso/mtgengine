"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KozileksTranslator extends UnimplementedCard {
  constructor (game) {
    super(game, "Kozilek's Translator", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KozileksTranslator;
