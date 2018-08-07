"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftedAetherborn extends UnimplementedCard {
  constructor (game) {
    super(game, "Gifted Aetherborn", "Aether Revolt", "AER");
  }
}

module.exports = GiftedAetherborn;
