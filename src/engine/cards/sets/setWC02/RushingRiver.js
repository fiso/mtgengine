"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushingRiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Rushing River", "World Championship Decks 2002", "WC02");
  }
}

module.exports = RushingRiver;
