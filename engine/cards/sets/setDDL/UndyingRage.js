"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndyingRage extends UnimplementedCard {
  constructor(game) {
    super(game, "Undying Rage", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = UndyingRage;
