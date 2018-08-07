"use strict";
const Constants = require ("../../../Constants");
const HissingIguanarBase = require("../setPCA/HissingIguanar");

class HissingIguanar extends HissingIguanarBase {
  constructor (game) {
    super(game, "Hissing Iguanar", "Planechase 2012", "PC2");
  }
}

module.exports = HissingIguanar;
