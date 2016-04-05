"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlashFoliage extends UnimplementedCard {
  constructor(game) {
    super(game, "Flash Foliage", "Dissension", "DIS");
  }
}

module.exports = FlashFoliage;
