"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GustWalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Gust Walker", "Amonkhet", "AKH");
  }
}

module.exports = GustWalker;
