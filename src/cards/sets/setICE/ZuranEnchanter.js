"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZuranEnchanter extends UnimplementedCard {
  constructor (game) {
    super(game, "Zuran Enchanter", "Ice Age", "ICE");
  }
}

module.exports = ZuranEnchanter;
