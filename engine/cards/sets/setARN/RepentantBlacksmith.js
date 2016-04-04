"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RepentantBlacksmith extends Card {
  constructor(game) {
    super(game, "Repentant Blacksmith", "Arabian Nights", "ARN");
  }
}

module.exports = RepentantBlacksmith;
