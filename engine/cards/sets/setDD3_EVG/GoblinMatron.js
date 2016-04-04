"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinMatronBase = require("../setATH/GoblinMatron.js");

class GoblinMatron extends GoblinMatronBase {
  constructor(game) {
    super(game, "Goblin Matron", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = GoblinMatron;
