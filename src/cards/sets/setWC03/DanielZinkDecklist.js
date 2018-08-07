"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DanielZinkDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Daniel Zink Decklist", "World Championship Decks 2003", "WC03");
  }
}

module.exports = DanielZinkDecklist;
