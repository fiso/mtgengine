"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Oracle extends Card {
  constructor(game) {
    super(game, "Oracle", "Vanguard", "VAN");
  }
}

module.exports = Oracle;
