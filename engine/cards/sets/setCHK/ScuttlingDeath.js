"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScuttlingDeath extends Card {
  constructor(game) {
    super(game, "Scuttling Death", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ScuttlingDeath;
