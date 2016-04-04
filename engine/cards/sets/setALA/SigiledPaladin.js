"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SigiledPaladin extends Card {
  constructor(game) {
    super(game, "Sigiled Paladin", "Shards of Alara", "ALA");
  }
}

module.exports = SigiledPaladin;
