"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuguryOwl extends UnimplementedCard {
  constructor(game) {
    super(game, "Augury Owl", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = AuguryOwl;
