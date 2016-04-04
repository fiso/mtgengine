"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarOracle extends Card {
  constructor(game) {
    super(game, "War Oracle", "Magic Origins", "ORI");
  }
}

module.exports = WarOracle;
