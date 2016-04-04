"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilkwingScout extends Card {
  constructor(game) {
    super(game, "Silkwing Scout", "Dissension", "DIS");
  }
}

module.exports = SilkwingScout;
