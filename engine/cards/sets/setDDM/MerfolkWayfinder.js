"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkWayfinder extends UnimplementedCard {
  constructor(game) {
    super(game, "Merfolk Wayfinder", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MerfolkWayfinder;
