"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackKnight extends Card {
  constructor(game) {
    super(game, "Black Knight", "Anthologies", "ATH");
  }
}

module.exports = BlackKnight;
