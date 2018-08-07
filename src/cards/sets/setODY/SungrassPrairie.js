"use strict";
const Constants = require ("../../../Constants");
const SungrassPrairieBase = require("../setCM2/SungrassPrairie");

class SungrassPrairie extends SungrassPrairieBase {
  constructor (game) {
    super(game, "Sungrass Prairie", "Odyssey", "ODY");
  }
}

module.exports = SungrassPrairie;
