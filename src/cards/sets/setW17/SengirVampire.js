"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SengirVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Sengir Vampire", "Welcome Deck 2017", "W17");
  }
}

module.exports = SengirVampire;
