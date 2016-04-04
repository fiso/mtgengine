"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Opportunity extends Card {
  constructor(game) {
    super(game, "Opportunity", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Opportunity;
