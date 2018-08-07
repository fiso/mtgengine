"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlphaBrawl extends UnimplementedCard {
  constructor (game) {
    super(game, "Alpha Brawl", "Dark Ascension", "DKA");
  }
}

module.exports = AlphaBrawl;
