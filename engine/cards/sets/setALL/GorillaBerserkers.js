"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GorillaBerserkers extends Card {
  constructor(game) {
    super(game, "Gorilla Berserkers", "Alliances", "ALL");
  }
}

module.exports = GorillaBerserkers;
