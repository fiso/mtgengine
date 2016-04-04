"use strict";
const Constants = require ("../../../Constants");
const HissingIguanarBase = require("../setPC2/HissingIguanar");

class HissingIguanar extends HissingIguanarBase {
  constructor(game) {
    super(game, "Hissing Iguanar", "Shards of Alara", "ALA");
  }
}

module.exports = HissingIguanar;
