"use strict";
const Constants = require ("../../../Constants");
const SoulExchangeBase = require("../setME2/SoulExchange");

class SoulExchange extends SoulExchangeBase {
  constructor (game) {
    super(game, "Soul Exchange", "Fallen Empires", "FEM");
  }
}

module.exports = SoulExchange;
