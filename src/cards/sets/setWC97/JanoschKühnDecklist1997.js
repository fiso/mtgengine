"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JanoschKühnDecklist1997 extends UnimplementedCard {
  constructor (game) {
    super(game, "Janosch Kühn Decklist 1997", "World Championship Decks 1997", "WC97");
  }
}

module.exports = JanoschKühnDecklist1997;
