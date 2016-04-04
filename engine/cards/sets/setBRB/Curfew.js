"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Curfew extends Card {
  constructor(game) {
    super(game, "Curfew", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Curfew;
