"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianHorde extends Card {
  constructor(game) {
    super(game, "Balduvian Horde", "Alliances", "ALL");
  }
}

module.exports = BalduvianHorde;
