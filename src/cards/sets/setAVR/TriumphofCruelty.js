"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TriumphofCruelty extends UnimplementedCard {
  constructor(game) {
    super(game, "Triumph of Cruelty", "Avacyn Restored", "AVR");
  }
}

module.exports = TriumphofCruelty;
