"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndyingRage extends Card {
  constructor(game) {
    super(game, "Undying Rage", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = UndyingRage;
