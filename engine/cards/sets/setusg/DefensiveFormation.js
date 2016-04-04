"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefensiveFormation extends Card {
  constructor(game) {
    super(game, "Defensive Formation", "Urza's Saga", "USG");
  }
}

module.exports = DefensiveFormation;
