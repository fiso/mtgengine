"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skullcrack extends Card {
  constructor(game) {
    super(game, "Skullcrack", "Gatecrash", "GTC");
  }
}

module.exports = Skullcrack;
