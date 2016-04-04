"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagicalHacker extends Card {
  constructor(game) {
    super(game, "Magical Hacker", "Unhinged", "UNH");
  }
}

module.exports = MagicalHacker;
