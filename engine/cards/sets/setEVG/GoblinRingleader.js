"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinRingleaderBase = require("../setAPC/GoblinRingleader.js");

class GoblinRingleader extends GoblinRingleaderBase {
  constructor(game) {
    super(game, "Goblin Ringleader", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinRingleader;
