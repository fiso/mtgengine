"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrainFreeze extends UnimplementedCard {
  constructor (game) {
    super(game, "Brain Freeze", "Vintage Masters", "VMA");
  }
}

module.exports = BrainFreeze;
