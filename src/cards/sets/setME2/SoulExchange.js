"use strict";
const Constants = require ("../../../Constants");
const SoulExchangeBase = require("../setFEM/SoulExchange");

class SoulExchange extends SoulExchangeBase {
  constructor (game) {
    super(game, "Soul Exchange", "Masters Edition II", "ME2");
  }
}

module.exports = SoulExchange;
