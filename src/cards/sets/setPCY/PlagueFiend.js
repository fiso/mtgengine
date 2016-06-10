"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Fiend", "Prophecy", "PCY");
  }
}

module.exports = PlagueFiend;
