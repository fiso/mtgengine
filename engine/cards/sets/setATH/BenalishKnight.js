"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenalishKnight extends Card {
  constructor(game) {
    super(game, "Benalish Knight", "Anthologies", "ATH");
  }
}

module.exports = BenalishKnight;
