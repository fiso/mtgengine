"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EarthServant extends Card {
  constructor(game) {
    super(game, "Earth Servant", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = EarthServant;
