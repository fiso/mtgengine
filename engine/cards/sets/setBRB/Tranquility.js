"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tranquility extends Card {
  constructor(game) {
    super(game, "Tranquility", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Tranquility;
