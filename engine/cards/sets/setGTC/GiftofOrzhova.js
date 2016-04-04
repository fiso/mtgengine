"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftofOrzhova extends Card {
  constructor(game) {
    super(game, "Gift of Orzhova", "Gatecrash", "GTC");
  }
}

module.exports = GiftofOrzhova;
