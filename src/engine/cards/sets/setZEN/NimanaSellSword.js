"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimanaSellSword extends UnimplementedCard {
  constructor (game) {
    super(game, "Nimana Sell-Sword", "Zendikar", "ZEN");
  }
}

module.exports = NimanaSellSword;
