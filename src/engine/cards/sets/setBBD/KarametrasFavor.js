"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarametrasFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "Karametra's Favor", "Battlebond", "BBD");
  }
}

module.exports = KarametrasFavor;
