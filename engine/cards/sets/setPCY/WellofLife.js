"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WellofLife extends UnimplementedCard {
  constructor(game) {
    super(game, "Well of Life", "Prophecy", "PCY");
  }
}

module.exports = WellofLife;
