"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhenFluffyBunniesAttack extends Card {
  constructor(game) {
    super(game, "When Fluffy Bunnies Attack", "Unhinged", "UNH");
  }
}

module.exports = WhenFluffyBunniesAttack;
