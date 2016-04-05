"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Touchstone extends UnimplementedCard {
  constructor(game) {
    super(game, "Touchstone", "Weatherlight", "WTH");
  }
}

module.exports = Touchstone;
