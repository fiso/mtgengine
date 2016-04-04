"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrenchGorger extends Card {
  constructor(game) {
    super(game, "Trench Gorger", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TrenchGorger;
