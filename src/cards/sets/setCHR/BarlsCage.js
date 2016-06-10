"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarlsCage extends UnimplementedCard {
  constructor (game) {
    super(game, "Barl's Cage", "Chronicles", "CHR");
  }
}

module.exports = BarlsCage;
