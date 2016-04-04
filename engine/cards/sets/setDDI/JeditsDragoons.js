"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeditsDragoons extends UnimplementedCard {
  constructor(game) {
    super(game, "Jedit's Dragoons", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = JeditsDragoons;
