"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarametrasFavor extends UnimplementedCard {
  constructor(game) {
    super(game, "Karametra's Favor", "Born of the Gods", "BNG");
  }
}

module.exports = KarametrasFavor;
