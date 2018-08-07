"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeerKrogerBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Peer Kröger Bio", "World Championship Decks 2003", "WC03");
  }
}

module.exports = PeerKrogerBio;
