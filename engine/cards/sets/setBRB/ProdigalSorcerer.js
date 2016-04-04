"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProdigalSorcerer extends Card {
  constructor(game) {
    super(game, "Prodigal Sorcerer", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ProdigalSorcerer;
