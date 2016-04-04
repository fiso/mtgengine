"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlphaBrawl extends Card {
  constructor(game) {
    super(game, "Alpha Brawl", "Dark Ascension", "DKA");
  }
}

module.exports = AlphaBrawl;
