"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PygmyTroll extends Card {
  constructor(game) {
    super(game, "Pygmy Troll", "Exodus", "EXO");
  }
}

module.exports = PygmyTroll;
