"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HailStorm extends Card {
  constructor(game) {
    super(game, "Hail Storm", "Alliances", "ALL");
  }
}

module.exports = HailStorm;
