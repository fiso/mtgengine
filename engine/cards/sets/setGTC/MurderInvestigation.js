"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurderInvestigation extends Card {
  constructor(game) {
    super(game, "Murder Investigation", "Gatecrash", "GTC");
  }
}

module.exports = MurderInvestigation;
