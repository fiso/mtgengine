"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoseCalm extends Card {
  constructor(game) {
    super(game, "Lose Calm", "Dragons of Tarkir", "DTK");
  }
}

module.exports = LoseCalm;
