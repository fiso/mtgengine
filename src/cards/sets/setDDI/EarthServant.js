"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarthServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Earth Servant", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = EarthServant;
