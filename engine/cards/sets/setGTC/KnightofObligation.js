"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofObligation extends Card {
  constructor(game) {
    super(game, "Knight of Obligation", "Gatecrash", "GTC");
  }
}

module.exports = KnightofObligation;
