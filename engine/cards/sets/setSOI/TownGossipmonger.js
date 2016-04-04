"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TownGossipmonger extends Card {
  constructor(game) {
    super(game, "Town Gossipmonger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TownGossipmonger;
