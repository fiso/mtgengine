"use strict";
const Constants = require ("../../../Constants");
const SungrassPrairieBase = require("../setCM2/SungrassPrairie");

class SungrassPrairie extends SungrassPrairieBase {
  constructor (game) {
    super(game, "Sungrass Prairie", "Commander 2016", "C16");
  }
}

module.exports = SungrassPrairie;
