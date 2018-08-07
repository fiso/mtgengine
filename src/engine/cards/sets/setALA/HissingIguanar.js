"use strict";
const Constants = require ("../../../Constants");
const HissingIguanarBase = require("../setPCA/HissingIguanar");

class HissingIguanar extends HissingIguanarBase {
  constructor (game) {
    super(game, "Hissing Iguanar", "Shards of Alara", "ALA");
  }
}

module.exports = HissingIguanar;
