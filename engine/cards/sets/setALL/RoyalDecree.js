"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoyalDecree extends Card {
  constructor(game) {
    super(game, "Royal Decree", "Alliances", "ALL");
  }
}

module.exports = RoyalDecree;
