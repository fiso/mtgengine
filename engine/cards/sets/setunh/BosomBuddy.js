"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BosomBuddy extends Card {
  constructor(game) {
    super(game, "Bosom Buddy", "Unhinged", "UNH");
  }
}

module.exports = BosomBuddy;
