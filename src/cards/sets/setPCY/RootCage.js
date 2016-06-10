"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootCage extends UnimplementedCard {
  constructor (game) {
    super(game, "Root Cage", "Prophecy", "PCY");
  }
}

module.exports = RootCage;
