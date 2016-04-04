"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreatOakGuardian extends Card {
  constructor(game) {
    super(game, "Great Oak Guardian", "Commander 2015", "C15");
  }
}

module.exports = GreatOakGuardian;
