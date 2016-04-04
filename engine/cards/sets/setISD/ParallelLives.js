"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParallelLives extends Card {
  constructor(game) {
    super(game, "Parallel Lives", "Innistrad", "ISD");
  }
}

module.exports = ParallelLives;
