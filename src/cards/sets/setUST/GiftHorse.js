"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftHorse extends UnimplementedCard {
  constructor (game) {
    super(game, "Gift Horse", "Unstable", "UST");
  }
}

module.exports = GiftHorse;
