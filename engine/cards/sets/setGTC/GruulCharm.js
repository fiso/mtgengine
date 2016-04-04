"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruulCharm extends Card {
  constructor(game) {
    super(game, "Gruul Charm", "Gatecrash", "GTC");
  }
}

module.exports = GruulCharm;
