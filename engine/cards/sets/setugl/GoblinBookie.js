"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinBookie extends Card {
  constructor(game) {
    super(game, "Goblin Bookie", "Unglued", "UGL");
  }
}

module.exports = GoblinBookie;
