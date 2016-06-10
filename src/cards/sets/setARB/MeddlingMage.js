"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeddlingMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Meddling Mage", "Alara Reborn", "ARB");
  }
}

module.exports = MeddlingMage;
