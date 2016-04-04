"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrokenFall extends Card {
  constructor(game) {
    super(game, "Broken Fall", "Battle Royale Box Set", "BRB");
  }
}

module.exports = BrokenFall;
