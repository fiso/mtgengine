"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MerfolkWayfinder extends Card {
  constructor(game) {
    super(game, "Merfolk Wayfinder", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MerfolkWayfinder;
