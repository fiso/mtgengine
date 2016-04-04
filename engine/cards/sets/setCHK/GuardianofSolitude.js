"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianofSolitude extends Card {
  constructor(game) {
    super(game, "Guardian of Solitude", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GuardianofSolitude;
