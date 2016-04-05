"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildMight extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Might", "Prophecy", "PCY");
  }
}

module.exports = WildMight;
