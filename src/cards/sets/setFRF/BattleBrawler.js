"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleBrawler extends UnimplementedCard {
  constructor(game) {
    super(game, "Battle Brawler", "Fate Reforged", "FRF");
  }
}

module.exports = BattleBrawler;
