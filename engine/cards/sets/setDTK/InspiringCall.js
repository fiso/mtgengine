"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InspiringCall extends Card {
  constructor(game) {
    super(game, "Inspiring Call", "Dragons of Tarkir", "DTK");
  }
}

module.exports = InspiringCall;
