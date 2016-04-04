"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Windfall extends Card {
  constructor(game) {
    super(game, "Windfall", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Windfall;
