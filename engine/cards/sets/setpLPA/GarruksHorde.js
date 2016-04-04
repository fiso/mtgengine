"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GarruksHorde extends Card {
  constructor(game) {
    super(game, "Garruk's Horde", "Launch Parties", "pLPA");
  }
}

module.exports = GarruksHorde;
