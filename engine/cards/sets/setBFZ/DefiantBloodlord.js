"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefiantBloodlord extends Card {
  constructor(game) {
    super(game, "Defiant Bloodlord", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DefiantBloodlord;
