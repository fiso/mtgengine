"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HedonistsTrove extends Card {
  constructor(game) {
    super(game, "Hedonist's Trove", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HedonistsTrove;
