"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SewerRats extends Card {
  constructor(game) {
    super(game, "Sewer Rats", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SewerRats;
