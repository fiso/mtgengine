"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimHanHowDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Sim Han How Decklist", "World Championship Decks 2002", "WC02");
  }
}

module.exports = SimHanHowDecklist;
