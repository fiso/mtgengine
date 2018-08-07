"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldDancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Shield Dancer", "Prophecy", "PCY");
  }
}

module.exports = ShieldDancer;
