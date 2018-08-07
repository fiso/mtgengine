"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CivicWayfinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Civic Wayfinder", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = CivicWayfinder;
