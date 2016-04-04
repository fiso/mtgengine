"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Retaliation extends Card {
  constructor(game) {
    super(game, "Retaliation", "Urza's Saga", "USG");
  }
}

module.exports = Retaliation;
