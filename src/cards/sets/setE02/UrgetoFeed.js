"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrgetoFeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Urge to Feed", "Explorers of Ixalan", "E02");
  }
}

module.exports = UrgetoFeed;
