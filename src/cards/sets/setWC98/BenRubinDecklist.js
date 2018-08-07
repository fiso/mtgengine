"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenRubinDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Ben Rubin Decklist", "World Championship Decks 1998", "WC98");
  }
}

module.exports = BenRubinDecklist;
