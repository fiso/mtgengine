"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalPegasus extends UnimplementedCard {
  constructor(game) {
    super(game, "Loyal Pegasus", "Born of the Gods", "BNG");
  }
}

module.exports = LoyalPegasus;
