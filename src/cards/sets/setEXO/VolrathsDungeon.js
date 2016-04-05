"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolrathsDungeon extends UnimplementedCard {
  constructor(game) {
    super(game, "Volrath's Dungeon", "Exodus", "EXO");
  }
}

module.exports = VolrathsDungeon;
