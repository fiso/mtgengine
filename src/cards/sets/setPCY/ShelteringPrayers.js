"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShelteringPrayers extends UnimplementedCard {
  constructor (game) {
    super(game, "Sheltering Prayers", "Prophecy", "PCY");
  }
}

module.exports = ShelteringPrayers;
