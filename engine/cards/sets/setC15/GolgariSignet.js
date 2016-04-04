"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolgariSignet extends Card {
  constructor(game) {
    super(game, "Golgari Signet", "Commander 2015", "C15");
  }
}

module.exports = GolgariSignet;
