"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EntertheDungeon extends UnimplementedCard {
  constructor (game) {
    super(game, "Enter the Dungeon", "Unhinged", "UNH");
  }
}

module.exports = EntertheDungeon;
