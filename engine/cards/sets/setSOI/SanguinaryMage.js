"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanguinaryMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Sanguinary Mage", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SanguinaryMage;
