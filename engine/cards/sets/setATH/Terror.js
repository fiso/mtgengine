"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Terror extends Card {
  constructor(game) {
    super(game, "Terror", "Anthologies", "ATH");
  }
}

module.exports = Terror;
