"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseCure extends UnimplementedCard {
  constructor(game) {
    super(game, "False Cure", "Onslaught", "ONS");
  }
}

module.exports = FalseCure;
