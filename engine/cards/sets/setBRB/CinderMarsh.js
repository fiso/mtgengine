"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderMarsh extends Card {
  constructor(game) {
    super(game, "Cinder Marsh", "Battle Royale Box Set", "BRB");
  }
}

module.exports = CinderMarsh;
