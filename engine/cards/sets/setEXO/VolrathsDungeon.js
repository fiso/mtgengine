"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolrathsDungeon extends Card {
  constructor(game) {
    super(game, "Volrath's Dungeon", "Exodus", "EXO");
  }
}

module.exports = VolrathsDungeon;
