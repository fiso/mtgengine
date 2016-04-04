"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flood extends Card {
  constructor(game) {
    super(game, "Flood", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Flood;
