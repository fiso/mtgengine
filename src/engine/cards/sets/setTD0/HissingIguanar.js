"use strict";
const Constants = require ("../../../Constants");
const HissingIguanarBase = require("../setPCA/HissingIguanar");

class HissingIguanar extends HissingIguanarBase {
  constructor (game) {
    super(game, "Hissing Iguanar", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = HissingIguanar;
