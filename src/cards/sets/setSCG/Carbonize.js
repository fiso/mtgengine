"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carbonize extends UnimplementedCard {
  constructor (game) {
    super(game, "Carbonize", "Scourge", "SCG");
  }
}

module.exports = Carbonize;
