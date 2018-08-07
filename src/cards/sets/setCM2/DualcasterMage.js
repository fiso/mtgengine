"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DualcasterMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Dualcaster Mage", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DualcasterMage;
