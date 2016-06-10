"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TownGossipmonger extends UnimplementedCard {
  constructor (game) {
    super(game, "Town Gossipmonger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TownGossipmonger;
