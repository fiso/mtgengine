"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SetonsScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Seton's Scout", "World Championship Decks 2002", "WC02");
  }
}

module.exports = SetonsScout;
