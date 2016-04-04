"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuguryOwl extends Card {
  constructor(game) {
    super(game, "Augury Owl", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = AuguryOwl;
