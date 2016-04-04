"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinChariot extends Card {
  constructor(game) {
    super(game, "Goblin Chariot", "Eighth Edition", "8ED");
  }
}

module.exports = GoblinChariot;
