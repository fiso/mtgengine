"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeasonedTactician extends Card {
  constructor(game) {
    super(game, "Seasoned Tactician", "Alliances", "ALL");
  }
}

module.exports = SeasonedTactician;
