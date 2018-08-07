"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whetstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Whetstone", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Whetstone;
