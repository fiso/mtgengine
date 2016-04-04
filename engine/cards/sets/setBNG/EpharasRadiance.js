"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpharasRadiance extends UnimplementedCard {
  constructor(game) {
    super(game, "Ephara's Radiance", "Born of the Gods", "BNG");
  }
}

module.exports = EpharasRadiance;
