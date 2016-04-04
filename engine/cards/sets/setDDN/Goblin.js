"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinBase = require("../setEVG/Goblin.js");

class Goblin extends GoblinBase {
  constructor(game) {
    super(game, "Goblin", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Goblin;
