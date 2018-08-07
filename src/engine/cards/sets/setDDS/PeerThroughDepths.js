"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeerThroughDepths extends UnimplementedCard {
  constructor (game) {
    super(game, "Peer Through Depths", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = PeerThroughDepths;
