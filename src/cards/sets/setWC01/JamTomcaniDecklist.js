"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JamTomcaniDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Jam Tomcani Decklist", "World Championship Decks 2001", "WC01");
  }
}

module.exports = JamTomcaniDecklist;
