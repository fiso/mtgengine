"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulExchangeBase = require("../setFEM/SoulExchange.js");

class SoulExchange extends SoulExchangeBase {
  constructor(game) {
    super(game, "Soul Exchange", "Masters Edition II", "ME2");
  }
}

module.exports = SoulExchange;
