"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForsakenWastes extends UnimplementedCard {
  constructor (game) {
    super(game, "Forsaken Wastes", "World Championship Decks 1997", "WC97");
  }
}

module.exports = ForsakenWastes;
