"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormCauldron extends Card {
  constructor(game) {
    super(game, "Storm Cauldron", "Alliances", "ALL");
  }
}

module.exports = StormCauldron;
