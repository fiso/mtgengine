"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyhunterPatrol extends UnimplementedCard {
  constructor(game) {
    super(game, "Skyhunter Patrol", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SkyhunterPatrol;
