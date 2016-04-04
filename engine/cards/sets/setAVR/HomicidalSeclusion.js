"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomicidalSeclusion extends UnimplementedCard {
  constructor(game) {
    super(game, "Homicidal Seclusion", "Avacyn Restored", "AVR");
  }
}

module.exports = HomicidalSeclusion;
