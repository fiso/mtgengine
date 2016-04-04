"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SengirVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Sengir Vampire", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SengirVampire;
