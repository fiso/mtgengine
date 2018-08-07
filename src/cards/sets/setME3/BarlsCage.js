"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarlsCage extends UnimplementedCard {
  constructor (game) {
    super(game, "Barl's Cage", "Masters Edition III", "ME3");
  }
}

module.exports = BarlsCage;
