"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoyalHerbalist extends Card {
  constructor(game) {
    super(game, "Royal Herbalist", "Alliances", "ALL");
  }
}

module.exports = RoyalHerbalist;
