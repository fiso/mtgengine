"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShiftingSky extends UnimplementedCard {
  constructor(game) {
    super(game, "Shifting Sky", "Eighth Edition", "8ED");
  }
}

module.exports = ShiftingSky;
