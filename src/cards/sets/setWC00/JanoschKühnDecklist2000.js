"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JanoschKühnDecklist2000 extends UnimplementedCard {
  constructor (game) {
    super(game, "Janosch Kühn Decklist (2000)", "World Championship Decks 2000", "WC00");
  }
}

module.exports = JanoschKühnDecklist2000;
