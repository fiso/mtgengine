"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeerKrogerDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Peer Kröger Decklist", "World Championship Decks 2003", "WC03");
  }
}

module.exports = PeerKrogerDecklist;
