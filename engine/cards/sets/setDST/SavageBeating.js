"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageBeating extends Card {
  constructor(game) {
    super(game, "Savage Beating", "Darksteel", "DST");
  }
}

module.exports = SavageBeating;
