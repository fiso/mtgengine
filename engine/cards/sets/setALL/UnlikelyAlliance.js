"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnlikelyAlliance extends Card {
  constructor(game) {
    super(game, "Unlikely Alliance", "Alliances", "ALL");
  }
}

module.exports = UnlikelyAlliance;
