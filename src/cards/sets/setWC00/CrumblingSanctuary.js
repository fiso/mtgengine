"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrumblingSanctuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Crumbling Sanctuary", "World Championship Decks 2000", "WC00");
  }
}

module.exports = CrumblingSanctuary;
