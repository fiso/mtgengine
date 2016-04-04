"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarnivalHellsteed extends Card {
  constructor(game) {
    super(game, "Carnival Hellsteed", "Prerelease Events", "pPRE");
  }
}

module.exports = CarnivalHellsteed;
