"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JonFinkelDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Jon Finkel Decklist", "World Championship Decks 2000", "WC00");
  }
}

module.exports = JonFinkelDecklist;
