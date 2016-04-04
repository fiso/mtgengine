"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VizkopaConfessor extends Card {
  constructor(game) {
    super(game, "Vizkopa Confessor", "Gatecrash", "GTC");
  }
}

module.exports = VizkopaConfessor;
