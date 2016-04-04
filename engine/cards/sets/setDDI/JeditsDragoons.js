"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeditsDragoons extends Card {
  constructor(game) {
    super(game, "Jedit's Dragoons", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = JeditsDragoons;
