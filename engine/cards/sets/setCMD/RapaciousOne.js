"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RapaciousOne extends Card {
  constructor(game) {
    super(game, "Rapacious One", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = RapaciousOne;
